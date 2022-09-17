import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Headless from '@tippyjs/react/headless';
import style from '../Center.module.scss';
import classNames from 'classnames/bind';
import { GlobalContext } from '../../../../../../App';

import Button from '../../../../../../component/Button';
import SearchResult from './SearchResult';

let cx = classNames.bind(style);
let timeDelaySearch;
function Search() {
    let inputRef = useRef();
    let result = [];
    let [globalState, dispatch] = useContext(GlobalContext);
    let [showSearch, setShowSearch] = useState(false);
    let [searchV, setSearchV] = useState('');
    let [searchR, setSearchR] = useState(['Hoa Hải đường', 'Muộn rồi mà sao còn', 'Hồng Nhan']);
    function handleClear() {
        inputRef.current.value = '';
        inputRef.current.focus();
        setSearchV('');
    }
    function hanleInputFocus() {
        setShowSearch(true);
    }
    function handleBlur() {
        setShowSearch(false);
    }
    // useEffect(() => {
    //     let valueSearch = searchV.trim();
    //     let http = 'https://youtube.googleapis.com/youtube/v3/';
    //     // let key = 'AIzaSyBzZYEEXnO39tIoiFn0QF5sNCk09UkxGe0';
    //     let key = 'AIzaSyDPWjnVKbmomvtifoIpeXs04G9crMOrnZ8';
    //     let callSearch = function () {
    //         let searchURL = `${http}search?maxResults=10&q=${valueSearch}&type=video&key=${key}`;
    //         return fetch(searchURL)
    //             .then((res) => res.json())
    //             .then((data) => data.items);
    //     };
    //     let callVideo = function (video) {
    //         let videoURL = `${http}videos?part=snippet&id=${video.id.videoId}&key=${key}`;
    //         return fetch(videoURL)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 return data;
    //             });
    //     };
    //     if (timeDelaySearch) {
    //         clearTimeout(timeDelaySearch);
    //     }
    //     timeDelaySearch = setTimeout(async () => {
    //         let resultSearch = await callSearch();
    //         for (let index in resultSearch) {
    //             result[index] = await callVideo(resultSearch[index]);
    //         }
    //         setSearchR(() => {
    //             return result.map((video) => {
    //                 return video.items[0].snippet.title;
    //             });
    //         });
    //         dispatch(['setSearch', [...result]]);
    //     }, 500);
    // }, [searchV]);
    return (
        <div className={cx('search-box')}>
            <Headless interactive visible={showSearch} render={(attrs) => <SearchResult data={searchR}></SearchResult>}>
                <div className={cx('search-form')}>
                    <Button className={cx('search-form-btn')}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Button>
                    <input
                        ref={inputRef}
                        value={searchV}
                        className={cx('input')}
                        placeholder="Tìm kiếm"
                        onChange={(e) => {
                            setSearchV(e.target.value);
                        }}
                        onFocus={hanleInputFocus}
                        onBlur={handleBlur}
                    ></input>
                    <Button className={cx('keybroad-btn')}>
                        <i class="fa-solid fa-keyboard"></i>
                    </Button>
                    <Button onClick={handleClear} className={cx('clear-btn')}>
                        <i class="fa-solid fa-xmark"></i>
                    </Button>
                </div>
            </Headless>
            <Tippy content="Tìm kiếm">
                <Link to="/search">
                    <Button className={cx('search-btn')}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </Button>
                </Link>
            </Tippy>
        </div>
    );
}
export default Search;
