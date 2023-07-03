import { Fragment, useState } from "react"

/*   Fragment : <> </>
    hook: anything that starts with useFunctionName
        eg: useState , useEffect
        
*/

let count = 1

const Counter = () => {
    console.log("re-render")

    const [value, setValue] = useState(0) //     returrns  [initialValue, mutatorFunction]


    function increment() {
        count++
        console.log("increment", { count })
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }
    const reset = () => {
        setValue(0)
    }


    return <Fragment>
        <h1>Counter: {count} </h1>
        <h1>value: {value} </h1>

        {/* <button onclick={increment()}>increment</button> */}
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
    </Fragment>

} 

export default Counter