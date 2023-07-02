import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    let todos = [
        {
            "id": 1,
            "title": "Do something nice for someone I care about",
            "completed": true,
            "userId": 26
        },
        {
            "id": 2,
            "title": "Memorize the fifty states and their capitals",
            "completed": false,
            "userId": 48
        },
        {
            "id": 3,
            "title": "Watch a classic movie",
            "completed": false,
            "userId": 4
        },
        {
            "id": 4,
            "title": "Contribute code or a monetary donation to an open-source software project",
            "completed": false,
            "userId": 48
        }
    ]

    return <div>


        <h1>Todos</h1>
        <ul style={{
            display: "block",
            listStyle: "disc"
        }}>
            {
                todos.map((todo, index) => {
                    return <li key={todo.id} >{todo.title}</li>
                })
            }

            {/* {
                todos.map(todo => (<li>{todo.title}</li>))
            } */}


            <li>{todos[1].title}</li>
            <li>{todos[2].title}</li>
            <li>{todos[3].title}</li>
        </ul>
    </div>
}

export default Todos