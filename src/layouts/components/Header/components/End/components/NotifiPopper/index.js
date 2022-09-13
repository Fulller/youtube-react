import style from './NotifiPopper.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import NotifiItem from './NotifiItem';
import listNotifi from './listnotifi';

let cx = classNames.bind(style);
function NotifiPopper() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span>Thông báo</span>
                <Tippy content="Cài đặt">
                    <i class="fa-solid fa-gear"></i>
                </Tippy>
            </div>
            <div className={cx('content')}>
                {listNotifi.map((notifi, index) => {
                    return <NotifiItem key={index} data={notifi}></NotifiItem>;
                })}
            </div>
        </div>
    );
}
export default NotifiPopper;
