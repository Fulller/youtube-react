import { useState } from 'react';
import styles from './AvatarPopper.module.scss';
import classNames from 'classnames/bind';
import listToll from './listToll';

import Avatar from '../../../../../../../assets/image/Avatar.jpg';

let cx = classNames.bind(styles);
function AvatarPopper() {
    let [secondMenu, setSecondMenu] = useState({});
    function handleNextMenu(data) {
        setSecondMenu({ ...data });
    }
    function handlePrevMenu() {
        setSecondMenu({});
    }
    function Menu1() {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <img src={Avatar}></img>
                    <div className={cx('info')}>
                        <h4>FULL COPPER</h4>
                        <span>Quản lý Tài khoản Google của bạn</span>
                    </div>
                </div>
                <div className={cx('list-toll')}>
                    {listToll.map((tollgGroup, indexTollGroup) => {
                        return (
                            <div className={cx('toll-group')} key={indexTollGroup}>
                                {tollgGroup.map((tollItem, indexTollItem) => {
                                    return (
                                        <div
                                            className={cx('toll-item')}
                                            key={indexTollItem}
                                            onClick={() => {
                                                handleNextMenu(tollItem.children);
                                            }}
                                        >
                                            <span className={cx('toll-item-icon')}>{tollItem.icon}</span>
                                            <span className={cx('toll-item-title')}>{tollItem.title}</span>
                                            <span className={cx('toll-item-next')}>
                                                {tollItem.children ? <i class="fa-solid fa-chevron-right"></i> : <></>}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    function Menu2() {
        let title = secondMenu.title;
        let listItem = secondMenu.data;
        return (
            <div className={cx('wrapper2')}>
                <div className={cx('header')}>
                    <span
                        className={cx('prev')}
                        onClick={() => {
                            handlePrevMenu();
                        }}
                    >
                        <i class="fa-solid fa-arrow-left"></i>
                    </span>
                    <h4>{title}</h4>
                </div>
                <div className={cx('list-item')}>
                    {listItem.map((item, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <span className={cx('check')}>
                                    {item.check ? <i class="fa-solid fa-check"></i> : <></>}
                                </span>
                                <span>{item.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return <> {secondMenu.title ? <Menu2></Menu2> : <Menu1></Menu1>}</>;
}
export default AvatarPopper;
