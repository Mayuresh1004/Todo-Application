import React, { useState } from 'react'
import { useToDo } from '../contexts'

function ToDoForm() {

    const [todo,setTodo] = useState("")

    const {addToDo} = useToDo()

    const add = (e)=>{
        e.preventDefault()
        if (!todo) {
            return
        }
        addToDo({todo,completed:false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className='flex '>
        <input type="text" 
        placeholder='Enter your ToDo...'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' className='bg-blue-500 text-white rounded-r-lg shrink-0 px-3 py-1' >Add</button>
    </form>
  )
}

export default ToDoForm