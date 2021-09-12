import { useContext } from "react";
import { Button, HStack, Spacer, Heading } from "@chakra-ui/react";
import TodoListItems from "./TodoListItems"
import { AppContext } from "../../../context/AppContext";



function TodoList() {
    const { getTodos } = useContext(AppContext)
    return (
        <>
            <HStack mb="15px">
                <Heading >Todo List</Heading>
                <Spacer />
                <Button position="static" onClick={getTodos}>
                    Load Todos From Api
                </Button>
            </HStack>
            <TodoListItems />
        </>
    );
}




export default TodoList;