import useStickyState from '../hooks/stickystate';

function Counter() {

    const [counter, setCounter] = useStickyState(0, 'Number_of_clicks')

     
    return (
        <div className='counterDiv'>
            <button className="button" onClick={() => setCounter(counter + 1)}>Click Here!</button>
            <p>The button has been clicked {counter} times!</p>
            <button className="button" onClick={() => setCounter(0)}>Reset Counter</button>
        </div>
    )
}
export default Counter;