import CreateTodo from '../create-todo/CreateTodo'
import TodoList from '../Todo-list/TodoList'
import './Todo.css'
import {useState} from "react"

const Todo = () =>{
    const [getLists, setLists] = useState([
        // {
        //     id: '',
        //     title: ''
        // }
    ])

    const eventCreateTodo = (todo) =>{
        setLists(getLists.concat(todo))
        console.log(getLists)
    }

    return (
        <div>
            <h3>To do list</h3>
            <CreateTodo onCreateTodo={eventCreateTodo}/>
            <TodoList todos={getLists}/>
        </div>
    )
}

export default Todo;