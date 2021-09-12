import { useContext } from 'react';
import {
    Button,
    Input,
    Flex,
    Checkbox,
} from '@chakra-ui/react';
import { AppContext } from "../../../context/AppContext";



const TodoListItems = () => {
    const { todos, deleteTodo } = useContext(AppContext)
    return (
        <>
            {todos.map(todo => (
                <Flex pt={2} key={todo.id}>
                    <Checkbox position="static" />
                    <Input
                        position="static"
                        mx={2}
                        value={todo.text}
                        onChange={(evt) => DOMRectReadOnly}
                    />
                    <Button
                        position="static"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </Button>
                </Flex>
            ))}
        </>
    );
}

export default TodoListItems