import './TodoList.css'

const TodoList = (props) =>{
    return (
        <ul>{
            props.todos.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>
            })
            }
        </ul>
    )
}

export default TodoList;