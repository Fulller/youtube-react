import style from './Content.module.scss';
import classNames from 'classnames/bind';
import Headless from '@tippyjs/react/headless';

import dateContent, { dataShowbarFooter } from './dataContent';
let cx = classNames.bind(style);
function ContentItem({ dataItem }) {
    let title = dataItem[1];
    dataItem = dataItem[0];
    return (
        <Headless
            delay={[500, 0]}
            placement="bottom-end"
            render={(attrs) => <span className={cx('popper-item')}>{dataItem.title}</span>}
        >
            <div className={cx('content-item')}>
                {dataItem.icon ? (
                    <span>{dataItem.icon}</span>
                ) : (
                    <span>
                        <img className={cx('avatar')} src={dataItem.avatar}></img>
                    </span>
                )}
                <span>{dataItem.title}</span>
                {title === 'SUBSCIPTIONS' ? (
                    <span className={cx('signal')}>
                        <img src="https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/rfid-signal-icon-14-256.png"></img>
                    </span>
                ) : (
                    <></>
                )}
            </div>
        </Headless>
    );
}
function ContentGroup({ dataGroup }) {
    let title = dataGroup.title;
    return (
        <div className={cx('content-group')}>
            {dataGroup.title ? <span className={cx('title')}>{dataGroup.title}</span> : <></>}
            {dataGroup.list.map((dataItem, index) => {
                return <ContentItem dataItem={[dataItem, title]} key={index}></ContentItem>;
            })}
        </div>
    );
}
function Content() {
    return (
        <div className={cx('wrapper')}>
            {dateContent.map((dataGroup, index) => {
                return <ContentGroup dataGroup={dataGroup} key={index}></ContentGroup>;
            })}
            <div className={cx('footer')}>
                {dataShowbarFooter.map((dataGroup, indexGroup) => {
                    return (
                        <div key={indexGroup} className={cx('footer-data-group')}>
                            {dataGroup.map((item, indexItem) => {
                                return (
                                    <span key={indexItem} className={cx('footer-data-item')}>
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                    );
                })}
                <div className={cx('footer-powered')}>2022 Google LLC</div>
            </div>
        </div>
    );
}
export default Content;
