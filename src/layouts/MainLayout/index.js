import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HideSibar from '../components/HideSidebar';
import Optional from '../components/Optional';
import styles from '../layout.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header></Header>
                <Optional></Optional>
            </div>
            <HideSibar></HideSibar>
            <div className={cx('sidebar')}>
                <Sidebar></Sidebar>
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
export default MainLayout;
