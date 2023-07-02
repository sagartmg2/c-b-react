import { Fragment, useState } from "react"

/*   Fragment : <> </>
    hook: anything that starts with useFunctionName
        eg: useState , useEffect
        
*/

export default () => {

    const [value, setValue] = useState(100)

    let count = 1

    function increment() {
        count++
        setValue(value + 1)
        console.log({ count })
    }

    console.log("render")
    return <Fragment>
        <h1>Counter: {count} </h1>
        <h1>value: {value} </h1>

        {/* <button onclick={increment()}>increment</button> */}
        <button onClick={increment}>increment</button>
    </Fragment>

} 