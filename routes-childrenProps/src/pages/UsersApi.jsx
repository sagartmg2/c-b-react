import axios from "axios"
import { useEffect, useState } from "react"


/* CRUD Operators  in DATABASE
    CREATE 
    READ
    UPDATE
    DELETE

*/
/* REQUEST METHODS
    GET - READ
    POST  - CREATE
    PUT/PATCH  - update
    DELETE - delte
 */



export default function UsersApi() {


    const [users, setUsers] = useState([])

    // useEffect
    
    // axios("https://dummyjson.com/users")
    // .then(res => {
    //     // users = res.data.users
    //     // console.log({users})
    //     setUsers(res.data.users)
    // })

    function fetchUsersData() {
        axios("https://dummyjson.com/users")
            .then(res => {
                // users = res.data.users
                // console.log({users})
                setUsers(res.data.users)
            })

        // fetch('https://dummyjson.com/users',{
        //     method:"GET"
        // })   // asynchronous function // runs in background // promise
        //     .then(res => {
        //         // console.log(res.json())
        //         res.json()
        //     }).then(data => {
        //         console.log(data)
        //     })

        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        // })

        console.log("fetcing....")





    }

    console.log("render...")

    return (
        <>
            <div>Users</div>
            <button onClick={fetchUsersData}>fetchUSER</button>
            <hr />
            <ul style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap"
            }}>
                {
                    users.map(user => {
                        return <li key={user.id}>
                            <div>
                                <img src={user.image} />
                                <p style={
                                    {
                                        textAlign: "center"
                                    }
                                }>{user.firstName}</p>
                            </div>
                        </li>
                    })
                }

            </ul>
        </>
    )
}
