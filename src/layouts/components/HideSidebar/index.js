import { useContext, useRef } from 'react';
import style from './HideSidebar.module.scss';
import classNames from 'classnames/bind';

import { GlobalContext } from '../../../App';
import Header from './Header';
import Content from './Content';

let cx = classNames.bind(style);
function HideSidebar() {
    let wrapperRef = useRef();
    let showbarRef = useRef();
    let [state, dispatch] = useContext(GlobalContext);
    function handleClickOutside(e) {
        if (e.target == wrapperRef.current) {
            showbarRef.current.className = cx('showbar', 'hide');
            wrapperRef.current.className = cx('wrapper', 'wrapperHide');
        }
        setTimeout(() => {
            if (e.target == wrapperRef.current) {
                dispatch('isShowHideSidebar');
            }
        }, 200);
    }
    return state.isShowHideSidebar ? (
        <div ref={wrapperRef} className={cx('wrapper')} id="hide-sidebar" onClick={(e) => handleClickOutside(e)}>
            <div ref={showbarRef} className={cx('showbar')}>
                <Header wrapperRef={wrapperRef} showbarRef={showbarRef}></Header>
                <Content></Content>
            </div>
        </div>
    ) : (
        <></>
    );
}
export default HideSidebar;
