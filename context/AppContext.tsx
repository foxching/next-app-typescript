import React, { ReactNode, useState, createContext, useReducer } from "react";
import { getAllTodos } from "../api/api";
import { ITodoModel } from "../Interface/Interface";

export type TodosContextState = {
    todos: ITodoModel[];
    getTodos: () => void;
    loadTodos: (todos: ITodoModel[]) => void;
    addTodo: (Todo: ITodoModel) => void;
    deleteTodo: (id: number) => void;
};

const contextDefaultValues: TodosContextState = {
    todos: [],
    getTodos: () => { },
    loadTodos: () => { },
    addTodo: () => { },
    deleteTodo: () => { }

};

export const AppContext = createContext<TodosContextState>(
    contextDefaultValues
);



const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<ITodoModel[]>(contextDefaultValues.todos);

    const loadTodos = (TodosFromApi: ITodoModel[]) => setTodos(TodosFromApi)

    const getTodos = async () => {
        const todosfromApi = await getAllTodos("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
        setTodos(todosfromApi);

    }

    const addTodo = (Todo: ITodoModel) => setTodos((todos) => [...todos, Todo]);

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter(todo => todo.id != id)
        setTodos(newTodos);
        console.log('yes')
    }


    return (
        <AppContext.Provider value={{ todos, loadTodos, getTodos, addTodo, deleteTodo }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider