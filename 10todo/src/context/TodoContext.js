import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "first Todo",
            completed : false
        },
        {
            id : 2,
            todo : "second Todo",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (todo ,id) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider