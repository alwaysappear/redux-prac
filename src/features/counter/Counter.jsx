import { increment, decrement, reset } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <section className="counter">
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </section>
    )
}

export default Counter