function useState(intitalValue) {
    /* other others... */
    let mutatorFunciton = () => {
        console.log("function to change the initalValue")
    }
    return [intitalValue, mutatorFunciton]
}

let [value, setValue] = useState(100)
console.log(value)
setValue()