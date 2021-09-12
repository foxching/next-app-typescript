import { useContext, useEffect } from 'react';
import { Box, Container } from "@chakra-ui/react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList"
import { ITodoModel } from "../../../Interface/Interface";
import { AppContext } from "../../../context/AppContext";

const TodosCompIndex = ({ todos }: { todos: ITodoModel[] }) => {
    const { loadTodos } = useContext(AppContext)

    useEffect(() => {
        loadTodos(todos)
    }, [])

    return (
        <>
            <Container maxW="container.lg" marginTop="40px">
                <TodosList />
                <AddTodo />
            </Container>
        </>
    );
};

export default TodosCompIndex;