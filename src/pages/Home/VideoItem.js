import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useContext } from 'react';

import style from './Home.module.scss';
import { GlobalContext } from '../../App';

let cx = classNames.bind(style);
function VideoItem({ data }) {
    let [globalContext, dispatch] = useContext(GlobalContext);
    function hanleClickWatch() {
        dispatch(['setVideo', data]);
    }
    return (
        <Link to="/watch">
            <div className={cx('video-item')} onClick={hanleClickWatch}>
                <img className={cx('thumbnail')} src={data.snippet.thumbnails.high.url}></img>
                <div className={cx('channel')}>
                    <img className={cx('avatar')} src={data.snippet.thumbnails.high.url}></img>
                    <h4 className={cx('title')}>{data.snippet.title}</h4>
                    <span className={cx('ellips')}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                </div>
                <h5 className={cx('channel-title')}>{data.snippet.channelTitle}</h5>
            </div>
        </Link>
    );
}
export default VideoItem;
