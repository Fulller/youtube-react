import { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Watch.module.scss';

import { GlobalContext } from '../../App';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
function VideoItem({ data }) {
    let [globalState, dispatch] = useContext(GlobalContext);
    function handleLickWatch() {
        dispatch(['setVideo', data]);
    }
    return (
        <a href="#watch">
            <div className={cx('video-item')} onClick={handleLickWatch}>
                <div className={cx('thumbnail')}>
                    <img src={data.snippet.thumbnails.high.url}></img>
                </div>
                <div className={cx('info')}>
                    <h4>{data.snippet.title}</h4>
                    <h5>{data.snippet.channelTitle}</h5>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </a>
    );
}
export default VideoItem;
