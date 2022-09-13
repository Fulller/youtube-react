import styles from './UploadPopper.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function UploadPopper() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <i class="fa-regular fa-square-caret-right"></i>
                <span>Tải video lên</span>
            </div>
            <div className={cx('item')}>
                <i class="fa-solid fa-wifi"></i>
                <span>Phát trực tiếp</span>
            </div>
        </div>
    );
}
export default UploadPopper;
