import { useRef, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Headless from '@tippyjs/react/headless';
import style from '../Center.module.scss';
import classNames from 'classnames/bind';

import Button from '../../../../../../component/Button';

let cx = classNames.bind(style);
function Search() {
    let inputRef = useRef();
    function handleClear() {
        inputRef.current.value = '';
        inputRef.current.focus();
    }
    return (
        <div className={cx('search-box')}>
            <div className={cx('search-form')}>
                <Button className={cx('search-form-btn')}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
                <input ref={inputRef} className={cx('input')} placeholder="Tìm kiếm"></input>
                <Button className={cx('keybroad-btn')}>
                    <i class="fa-solid fa-keyboard"></i>
                </Button>
                <Button onClick={handleClear} className={cx('clear-btn')}>
                    <i class="fa-solid fa-xmark"></i>
                </Button>
            </div>
            <Tippy content="Tìm kiếm">
                <div>
                    <Button className={cx('search-btn')}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}
export default Search;
