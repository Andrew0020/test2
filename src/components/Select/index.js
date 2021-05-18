import React, {useState} from 'react';
import cn from 'classnames';

import './select.css';

function SelectCustom() {
    const LIST = [
        '0001',
        '0002',
        '0003',
        '0004',
        '0005',
        '0006',
        '0007',
        '0008',
        'test1',
        'test2',
        'test3'
    ];

    const [isShowElements, setIsShowElements] = useState(false);
    const [isCrossActive, setIsCrossActive] = useState(false);
    const [selectList, setSelectList] = useState(LIST);
    const wrapSecond = document.getElementById('second');

    const handleChange = (e) => {
        const result = LIST.filter(item => {
            return item.startsWith(e.target.value);
        });

        setIsShowElements(true);
        setSelectList(result);
    }

    const clickArrow = () => {
        setIsShowElements(!isShowElements);
    }

    const clickElement = (e) => {
        document.getElementById('select').value = e.target.innerHTML;

        for (let i = 0; i < wrapSecond.children.length; i++) {
            wrapSecond.children[i].classList.remove('secondActive');
        }

        e.target.classList.add('secondActive');

        setIsCrossActive(true);
        setIsShowElements(false);
        setSelectList(LIST);
    }

    const clickReset = () => {
        document.getElementById('select').value = '';
        document.getElementById('select').placeholder = 'Select ...';

        for (let i = 0; i < wrapSecond.children.length; i++) {
            wrapSecond.children[i].classList.remove('secondActive');
        }

        setIsCrossActive(false);
        setSelectList(LIST);
    }

    return (
        <div className="select">
            <div className="root">
                <div
                    className="main"
                >
                    <div className="mainTop">
                        <div>
                            <input
                                autoComplete="off"
                                id="select"
                                type="text"
                                placeholder="Select ..."
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className={cn('cross', { elementShow: isCrossActive })}
                            onClick={clickReset}
                        >
                            <span>&#215;</span>
                        </div>
                        <div onClick={clickArrow}>
                            {isShowElements ? <span>&#9652;</span> : <span>&#9662;</span> }
                        </div>
                    </div>

                    <div id="second" className={cn('second', { elementHide: !isShowElements })}>
                        {selectList.map((item) => {
                            return (
                                <div key={item} onClick={clickElement}>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectCustom;
