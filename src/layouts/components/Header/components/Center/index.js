import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Center.module.scss';
import classNames from 'classnames/bind';
import Button from '../../../../../component/Button';
import Search from './Search';

let cx = classNames.bind(styles);
function Center() {
    return (
        <div className={cx('wrapper')}>
            <Search></Search>
            <Tippy content="Tìm kiếm bằng giọng nói">
                <div>
                    <Button className={cx('btn-microphone')}>
                        <i class="fa-solid fa-microphone"></i>
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}
export default Center;
