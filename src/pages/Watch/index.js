import { useContext } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import VideoItem from './VideoItem';
import Button from '../../component/Button';
import style from './Watch.module.scss';
import { GlobalContext } from '../../App';
import dataShowbar from '../../layouts/components/HideSidebar/Content/dataContent';

let cx = classNames.bind(style);
let listAction = [
    {
        icon: <i class="fa-regular fa-thumbs-up"></i>,
        name: '37K',
    },
    {
        icon: <i class="fa-regular fa-thumbs-down"></i>,
        name: 'Dislike',
    },
    {
        icon: <i class="fa-solid fa-share"></i>,
        name: 'Share',
    },
    {
        icon: <i class="fa-solid fa-download"></i>,
        name: 'Donwload',
    },
    {
        icon: <i class="fa-solid fa-scissors"></i>,
        name: 'Clip',
    },
    {
        icon: <i class="fa-solid fa-floppy-disk"></i>,
        name: 'Save',
    },
    {
        icon: <i class="fa-solid fa-ellipsis"></i>,
        name: '',
    },
];
function Watch() {
    let [globalState, dispatch] = useContext(GlobalContext);
    let video = globalState.currentVideo;
    let listVideo = globalState.videoSearch;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <iframe
                    width="667"
                    height="375"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&fullscreen=1`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true"
                ></iframe>
                <div className={cx('tag')}>
                    {video.snippet.tags.map((tag, index) => {
                        if (index < 4) {
                            return <span>#{tag}</span>;
                        }
                    })}
                </div>
                <div className={cx('title')}>{video.snippet.title}</div>
                <div className={cx('control')}>
                    {listAction.map((action) => {
                        return (
                            <Tippy content={action.name}>
                                <div>
                                    {action.icon}
                                    <span>{action.name}</span>
                                </div>
                            </Tippy>
                        );
                    })}
                </div>
                <div className={cx('channel')}>
                    <div className={cx('channel-box')}>
                        <div className={cx('left')}>
                            <img className={cx('channel-avatar')} src={video.snippet.thumbnails.high.url}></img>
                            <span className={cx('channel-name')}>{video.snippet.channelTitle}</span>
                        </div>
                        <div className={cx('right')}>
                            <Button className={cx('btn-sub')}>SUBSCRIBED</Button>
                            <span>
                                <i class="fa-solid fa-bell"></i>
                            </span>
                        </div>
                    </div>
                    {/* <div className={cx('discription')}>{video.snippet.description}</div> */}
                </div>
                {/* <div className={cx('comment')}></div> */}
            </div>
            <div className={cx('right')}>
                {listVideo.map((video, index) => {
                    return <VideoItem data={video.items[0]} key={index}></VideoItem>;
                })}
            </div>
        </div>
    );
}
export default Watch;
