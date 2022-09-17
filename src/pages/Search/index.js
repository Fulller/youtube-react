import { useContext, useEffect } from 'react';

import { GlobalContext } from '.././../App';
import style from './Search.module.scss';
import classNames from 'classnames/bind';
import VideoItem from './VideoItem';

let cx = classNames.bind(style);
function Search() {
    let [globalState, dispatch] = useContext(GlobalContext);
    let listVideo = globalState.videoSearch;
    console.log(listVideo);
    listVideo = listVideo.map((video) => {
        return video.items[0];
    });
    return (
        <div className={cx('wrapper')}>
            {listVideo.map((video) => {
                return <VideoItem data={video}></VideoItem>;
            })}
        </div>
    );
}
export default Search;
