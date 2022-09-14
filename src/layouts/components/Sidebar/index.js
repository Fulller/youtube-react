import { useState } from 'react';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import Button from '../../../component/Button';

let cx = classNames.bind(style);
let sidebarList = [
    {
        icon: <i class="fa-solid fa-house"></i>,
        title: 'Trang chủ',
        to: '/home',
        active: true,
    },
    {
        icon: <i class="fa-regular fa-compass"></i>,
        title: 'Khám phá',
        to: '/explore',
        active: false,
    },
    {
        icon: <i class="fa-solid fa-play"></i>,
        title: 'Shorts',
        to: '/shorts',
        active: false,
    },
    {
        icon: <i class="fa-solid fa-layer-group"></i>,
        title: 'Kênh đăng ký',
        to: '/subscriptions',
        active: false,
    },
    {
        icon: <i class="fa-solid fa-book-open"></i>,
        title: 'Thư viện',
        to: '/library',
        active: false,
    },
];
function Sidebar() {
    let [list, setList] = useState(sidebarList);
    function handleActive(index) {
        let newState = [...list];
        for (let item in newState) {
            newState[item].active = false;
        }
        newState[index].active = true;
        setList([...newState]);
    }
    return (
        <div className={cx('wrapper')}>
            {sidebarList.map((sidebarItem, index) => {
                return (
                    <Button
                        key={index}
                        transparent
                        to={sidebarItem.to}
                        className={cx('button', `${sidebarItem.active ? 'active' : ''}`)}
                        onClick={() => {
                            handleActive(index);
                        }}
                    >
                        {sidebarItem.icon}
                        <span>{sidebarItem.title}</span>
                    </Button>
                );
            })}
        </div>
    );
}
export default Sidebar;
