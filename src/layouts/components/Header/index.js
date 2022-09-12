import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Start from './components/Start';
import Center from './components/Center';
import End from './components/End';

let cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <Start></Start>
            <Center></Center>
            <End></End>
        </div>
    );
}
export default Header;
