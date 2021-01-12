import {useRouter} from 'next/router'
import Link from 'next/link'
import axios from "axios";
const baseURL = 'https://jsonplaceholder.typicode.com'
import {useEffect,useState} from 'react'

const Todo = () => {
    const router = useRouter()
    const {todoId} = router.query
    const [todo,setTodo] = useState(null)
    const fetchTodo = async () => {
        if(todoId){
            const response = await axios.get(`${baseURL}/todos/${todoId}`)
            setTodo(response.data)
        }
    }
    useEffect(fetchTodo,[todoId])
    return(
        <>
            <h1 style={{margin:10}}>Todo</h1>
            {todo !== null ? (
                <div style={{padding:20}}>
                    <p>todoId : {todo.id}</p>
                    <p>userId : {todo.userId}</p>
                    <p>title {todo.title}</p>
                    <p>completed : {todo.completed.toString()}</p>
                </div>
            ):null}
            <Link href="/todo">
                Back
            </Link>
        </>
    )
}

export default Todo
