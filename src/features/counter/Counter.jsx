import {
    increment, decrement,
    reset, incrementByAmount
} from './counterSlice'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <section className="counter">
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => resetAll()}>reset</button>
            </div>
            <input type="text" value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    add amount
                </button>
            </div>
        </section>
    )
}

export default Counter