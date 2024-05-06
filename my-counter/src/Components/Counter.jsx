import React, { useState } from 'react';
import './Count.css'

function Counter() {

    const [count, setCount] = useState(0)

    function handlePlus () {
        setCount(count + 1)
    }
    function handleMinus () {
        setCount(count - 1)
    }

    return ( 
        <div className='block'>
            <h1 className='block__name'>COUNTER</h1>
            <h1 className='block__count'>{count}</h1>
            <div>
            <button className='block__button' onClick={handlePlus}>Plus +</button>
            <button className='block__button' onClick={handleMinus}>Minus -</button>
            </div>
        </div>
     );
}

export default Counter;