import { increment, decrement } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>Counter</div>
    )
}

export default Counter