import styles from './Center.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../../component/Button';
import Search from './Search';

let cx = classNames.bind(styles);
function Center() {
    return (
        <div className={cx('wrapper')}>
            <Search></Search>
            <Button className={cx('btn-microphone')}>
                <i class="fa-solid fa-microphone"></i>
            </Button>
        </div>
    );
}
export default Center;
