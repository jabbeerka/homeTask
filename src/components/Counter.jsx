import React from 'react';
import './index.css';


const Counter = ({ plus, minus, reload, counter }) => {
    return (
        <div className="body">
            <div className="content">
                <span className="number">{counter}</span>
            </div>
            <div className="wrapper">
                <div onClick={plus} className="plus">
                    <img src="./Vector.png" alt="plus" />
                </div>
                <div onClick={minus} className="minus">
                    <img src="./Minus.png" alt="minus" />
                </div>
                <div onClick={reload} className="reload">
                    <img src="./Reset.png" alt="reset" />
                </div>
            </div>
        </div>
    )
}
export default Counter;