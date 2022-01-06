import './CreateTodo.css'
import {useState} from "react"

const CreateTodo = (props) =>{
    const [getNewList, setNewList] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const newList = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getNewList
        }

        props.onCreateTodo(newList)

        setNewList('')

        // console.log(newList)
    }

    const handleInputList = (event) =>{
        setNewList(event.target.value)
        console.log(getNewList)
    }


    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getNewList} onChange={handleInputList}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default CreateTodo;