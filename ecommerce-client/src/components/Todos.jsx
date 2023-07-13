import React, { useState } from 'react'

export default function Todos() {
    const [todos, setTodos] = useState(["react", "css", "js"])

    const addTodo = (event) => {
        event.preventDefault()
        console.log(event.target.title.value)

        let oldTodos = [...todos]
        oldTodos.push(event.target.title.value)
        console.log(oldTodos)

        setTodos(oldTodos)
    }

    const deleteTodo = (index) => {
        console.log("dleete...", index)

        let temp = [...todos]  // [react ,css, js]
        // temp.splice(index, 1)
        temp = temp.filter((el, idx) => {
            return idx != index
        })

        setTodos(temp)
    }

    return (
        <>
            <div>Todos</div>
            <hr />
            <form onSubmit={addTodo}>
                <input name='title' className='border border-black ' />
                <button className='border border-black bg-gray-500 text-white px-4 capitalize '>add todo</button>
            </form>
            <hr />
            <ul className='pl-8 list-disc'>
                {
                    todos.map((todo, index) => (
                        <li>{todo}
                            <button
                                className='ml-2 bg-red-500 text-white rounded text-xs px-1 '
                                onClick={() => {
                                    deleteTodo(index)
                                }}
                            >
                                delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}
