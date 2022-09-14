import { useState } from 'react';
import style from './Optional.module.scss';
import classNames from 'classnames/bind';

import listOption from './listOption';

let cx = classNames.bind(style);
function Optional() {
    let [listOt, setListOt] = useState(listOption);
    function handeleCheck(index) {
        let newState = [...listOt];
        for (let item in newState) {
            if (newState[item].check == true) {
                newState[item].check = false;
            }
        }
        newState[index].check = true;
        setListOt([...newState]);
    }
    return (
        <div className={cx('wrapper')}>
            {listOt.map((option, index) => {
                return (
                    <span
                        onClick={() => handeleCheck(index)}
                        key={index}
                        className={cx('option', `${option.check ? 'active' : ''}`)}
                    >
                        {option.title}
                    </span>
                );
            })}
        </div>
    );
}
export default Optional;
