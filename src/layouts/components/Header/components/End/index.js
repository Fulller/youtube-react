import style from './End.module.scss';
import classNames from 'classnames/bind';
import Headless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

import Button from '../../../../../component/Button';
import Avatar from '../../../.././../assets/image/Avatar.jpg';
import UploadPopper from './components/UploadPopper';
import NotifiPopper from './components/NotifiPopper';
import AvatarPopper from './components/AvatarPopper';

let cx = classNames.bind(style);
function End() {
    let [isShowUpload, setIsShowUpload] = useState(false);
    let [isShowNotifi, setIsShowNotifi] = useState(false);
    let [isShowAvatar, setIsShowAvatar] = useState(false);
    function handleShow(isShow, setIsShow) {
        isShow ? setIsShow(false) : setIsShow(true);
    }
    return (
        <div className={cx('wrapper')}>
            <Headless
                onClickOutside={() => setIsShowUpload(false)}
                visible={isShowUpload}
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <UploadPopper></UploadPopper>
                    </div>
                )}
            >
                <Tippy content="Tạo">
                    <div>
                        <Button
                            transparent
                            className={cx('upload')}
                            onClick={() => handleShow(isShowUpload, setIsShowUpload)}
                        >
                            <i class="fa-solid fa-video"></i>
                        </Button>
                    </div>
                </Tippy>
            </Headless>
            <Headless
                onClickOutside={() => setIsShowNotifi(false)}
                visible={isShowNotifi}
                interactive
                placement="left"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <NotifiPopper></NotifiPopper>
                    </div>
                )}
            >
                <Tippy content="Tạo">
                    <div>
                        <Button
                            transparent
                            className={cx('upload')}
                            onClick={() => handleShow(isShowNotifi, setIsShowNotifi)}
                        >
                            <i class="fa-regular fa-bell"></i>
                        </Button>
                    </div>
                </Tippy>
            </Headless>
            <Headless
                onClickOutside={() => {
                    setIsShowAvatar(false);
                }}
                visible={isShowAvatar}
                interactive
                placement="left"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <AvatarPopper></AvatarPopper>
                    </div>
                )}
            >
                <div>
                    <Button
                        transparent
                        className={cx('avatar')}
                        onClick={() => handleShow(isShowAvatar, setIsShowAvatar)}
                    >
                        <img src={Avatar}></img>
                    </Button>
                </div>
            </Headless>
        </div>
    );
}
export default End;
