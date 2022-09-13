import { useState } from 'react';
import styles from './NotifiPopper.module.scss';
import classNames from 'classnames/bind';
import Headless from '@tippyjs/react/headless';

let cx = classNames.bind(styles);
function NotifiItem({ data }) {
    let [isShowOption, setIsShowOption] = useState(false);
    function hanleIsSHow(isShow, setIsShow) {
        isShow ? setIsShow(false) : setIsShow(true);
    }
    function Option() {
        return (
            <div className={cx('option')}>
                <div className={cx('option-item')}>
                    <i class="fa-regular fa-eye-slash"></i>
                    <span>Ẩn thông báo này</span>
                </div>
                <div className={cx('option-item')}>
                    <i class="fa-solid fa-list-ul"></i>
                    <span>Tắt tất cả thông báo từ {data.chanel}</span>
                </div>
            </div>
        );
    }
    return (
        <div className={cx('notifi-item')}>
            <span className={cx('dot')}>{data.isSeen ? <></> : <i class="fa-solid fa-circle"></i>}</span>
            <img className={cx('avatar')} src={data.avatar}></img>
            <p className={cx('title')}>
                {data.title}
                <span>{data.time}</span>
            </p>
            <img className={cx('thumbnail')} src={data.thumbnail}></img>
            <Headless
                placement="bottom-start"
                onClickOutside={() => setIsShowOption(false)}
                visible={isShowOption}
                interactive
                render={(attrs) => (
                    <div>
                        <Option></Option>
                    </div>
                )}
            >
                <button onClick={() => hanleIsSHow(isShowOption, setIsShowOption)} className={cx('options')}>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </Headless>
        </div>
    );
}
export default NotifiItem;
