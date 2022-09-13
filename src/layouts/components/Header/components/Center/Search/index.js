import Tippy from '@tippyjs/react';
import style from '../Center.module.scss';
import classNames from 'classnames/bind';

import Button from '../../../../../../component/Button';

let cx = classNames.bind(style);
function Search() {
    return (
        <div className={cx('search-box')}>
            <div className={cx('search-form')}>
                <Button className={cx('search-form-btn')}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
                <input className={cx('input')} placeholder="Tìm kiếm"></input>
                <Button className={cx('keybroad-btn')}>
                    <i class="fa-solid fa-keyboard"></i>
                </Button>
                <Button className={cx('clear-btn')}>
                    <i class="fa-solid fa-xmark"></i>
                </Button>
            </div>
            <Button className={cx('search-btn')}>
                <i class="fa-solid fa-magnifying-glass"></i>
            </Button>
        </div>
    );
}
export default Search;
