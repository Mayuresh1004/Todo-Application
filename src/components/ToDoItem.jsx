import React, { useState } from 'react'
import { useToDo } from '../contexts'

function ToDoItem({todo}) {

    const [isToDoEditable,setIsToDoEditable] = useState(false)

    const [todoMsg,setTodoMsg] = useState(todo.todo)

    const  {updateToDo,deleteToDo,toggleComplete} = useToDo()

    const editTodo = () =>{
        updateToDo(todo.id,{...todo, todo: todoMsg})
        setIsToDoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 
         text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}` }
    >
        <input type="checkbox" 
            className='cursor-pointer'
            checked = {todo.completed}
            onChange={toggleCompleted}
            disabled={isToDoEditable}
        />

        <input type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${isToDoEditable ? "border-black/10 px-2" : "border-transparent"}`}
            value={todoMsg}
            readOnly={!isToDoEditable}
            onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={()=>{
            if (todo.completed) {
                return
            }
            if (isToDoEditable) {
                editTodo()
            } else{
                setIsToDoEditable((prev)=>!prev)
            }
        }}
        disabled={todo.completed}
        >{isToDoEditable? "📁" : "✏️" }</button>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={()=>{
            deleteToDo(todo.id)
        }}
        >❌</button>
    </div>
  )
}

export default ToDoItem
