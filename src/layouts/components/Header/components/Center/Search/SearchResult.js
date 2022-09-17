import style from '../Center.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
function SearchResult({ data }) {
    function SearchResultItem({ data }) {
        return (
            <div className={cx('search-result-item')}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span className={cx('title')}>{data}</span>
                <span className={cx('remove')}>Remove</span>
            </div>
        );
    }
    return (
        <div className={cx('search-result')}>
            {data.map((item, index) => {
                return <SearchResultItem data={item} key={index}></SearchResultItem>;
            })}
        </div>
    );
}
export default SearchResult;
