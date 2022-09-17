import { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Search.module.scss';
import classNames from 'classnames/bind';

import { GlobalContext } from '../../App';

let cx = classNames.bind(style);
function VideoItem({ data }) {
    let [globalState, dispatch] = useContext(GlobalContext);
    function hanleClickWatch() {
        dispatch(['setVideo', data]);
    }
    return (
        <Link to="/watch">
            <div className={cx('video-item')} onClick={hanleClickWatch}>
                <div className={cx('thumbnail')}>
                    <img className={cx('thumbnail-image')} src={data.snippet.thumbnails.high.url}></img>
                </div>
                <div className={cx('content')}>
                    <h4 className={cx('title')}>{data.snippet.title}</h4>
                    <div className={cx('channel')}>
                        <img className={cx('channel-image')} src={data.snippet.thumbnails.high.url}></img>
                        <span className={cx('channel-name')}>{data.snippet.channelTitle}</span>
                    </div>
                    <div className={cx('discription')}>{data.snippet.description}</div>
                </div>
            </div>
        </Link>
    );
}
export default VideoItem;
