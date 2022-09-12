import style from './Optional.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
function Optional() {
    return <div className={cx('wrapper')}></div>;
}
export default Optional;
