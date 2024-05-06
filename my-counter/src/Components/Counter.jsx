import React, { useState } from 'react';
import './Count.css'

function Counter() {

    const [state, setState] = useState(0)

    function plus () {
        setState(state + 1)
    }
    function minus () {
        setState(state - 1)
    }

    return ( 
        <div className='block'>
            <h1 className='block__name'>COUNTER</h1>
            <h1 className='block__count'>{state}</h1>
            <div>
            <button className='block__button' onClick={plus}>Plus +</button>
            <button className='block__button' onClick={minus}>Minus -</button>
            </div>
        </div>
     );
}

export default Counter;