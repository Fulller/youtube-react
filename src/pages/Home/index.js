import classNames from 'classnames/bind';
import { useContext } from 'react';

import style from './Home.module.scss';
import { GlobalContext } from '../../App';
import VideoItem from './VideoItem';

let cx = classNames.bind(style);
function Home() {
    let [globalContext, dispatc] = useContext(GlobalContext);
    let listVideo = globalContext.videoSearch;
    return (
        <div className={cx('wrapper')}>
            {listVideo.map((video, index) => {
                return <VideoItem data={video.items[0]} key={index}></VideoItem>;
            })}
        </div>
    );
}
export default Home;
