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
                <div className={cx('image-logo')}>
                    <img src={logo}></img>
                </div>
            </Link>
        </div>
    );
}
export default Start;
