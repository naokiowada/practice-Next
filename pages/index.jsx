import { useState } from 'react';

const naoki = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(++count)
    }
    const decrementCount = () => {
        setCount(--count)
    }
    return (
        <div style={{backgroundColor: count < 0 ? 'red' : 'white'}}>
            <div>
                <p>{count}</p>
            </div>
            <button onClick={decrementCount}>-</button>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}
export default yuto