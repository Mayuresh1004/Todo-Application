import {createContext,useContext} from 'react'
import { update } from 'three/examples/jsm/libs/tween.module.js'

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo: "ToDo Message",
            completed: false
        }
    ],
    addToDo: (todo)=>{},
    updateToDo: (id,todo)=>{},
    deleteToDo: (id)=> {},
    toggleComplete: (id)=> {}

})

export const useToDo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider
