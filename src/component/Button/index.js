import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function Button({ children, className, ...props }) {
    let Tag = 'button';
    let classname = ['wrapper', className];
    for (let prop in props) {
        if (prop) {
            switch (prop) {
                case 'transparent':
                    classname.push('transparent');
                    break;
                case 'to':
                    Tag = Link;
                    break;
                case 'herf':
                    Tag = 'a';
                    break;
            }
        }
    }
    return (
        <Tag className={cx(classname)} {...props}>
            {children}
        </Tag>
    );
}
export default Button;
