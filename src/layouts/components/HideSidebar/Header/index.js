import { useContext } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styleHide from '../HideSidebar.module.scss';

import { GlobalContext } from '../../../../App';
import logo from '../../../../assets/image/Logo.png';
let cx = classNames.bind(style);
let cf = classNames.bind(styleHide);
function Header({ wrapperRef, showbarRef }) {
    let [state, dispatch] = useContext(GlobalContext);
    return (
        <div className={cx('wrapper')}>
            <button
                className={cx('btn-menu')}
                onClick={(e) => {
                    showbarRef.current.className = cf('showbar', 'hide');
                    setTimeout(() => {
                        dispatch('isShowHideSidebar');
                    }, 400);
                }}
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            <Link to="/">
                <Tippy content="Trang chủ Youtube" delay={[500, 0]}>
                    <div className={cx('image-logo')}>
                        <img src={logo}></img>
                    </div>
                </Tippy>
            </Link>
        </div>
    );
}
export default Header;
