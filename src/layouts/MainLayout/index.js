import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HideSibar from '../components/HideSidebar';
import styles from '../layout.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function MainLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header></Header>
            <HideSibar></HideSibar>
            <div className={cx('content')}>
                <Sidebar></Sidebar>
                {children}
            </div>
        </div>
    );
}
export default MainLayout;
