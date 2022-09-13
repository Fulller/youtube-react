import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Start.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/image/Logo.png';
let cx = classNames.bind(style);
function Start() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn-menu')}>
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
export default Start;
