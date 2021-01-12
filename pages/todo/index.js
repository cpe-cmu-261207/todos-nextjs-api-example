import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com'

const Todos = () => {
    const [todos,setTodos] = useState([])
    const fetchTodos = async () => {
        const response = await axios.get(`${baseURL}/todos`)
        console.log(response.data)
        setTodos(response.data)

    }

    useEffect(fetchTodos,[])
    return (
        <>
            <h1>All Todos from jsonplaceholder</h1>

                <ul>
                    {
                        todos.map(todo => (

                            <Link  key={todo.id} href={`/todo/${todo.id}`}>
                                <li>
                                    {todo.title}
                                    <button style={{margin:10}}>more</button>
                                </li>
                            </Link>

                        ))
                    }
                </ul>


        </>
    )
}

export  default Todos
