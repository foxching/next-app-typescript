import { useState, useContext } from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { AppContext } from "../../../context/AppContext";


function AddTodo() {
    const [todoText, setTodoText] = useState<string>("")
    const { addTodo } = useContext(AppContext)

    const handleAddTodo = () => {
        const newTodo = {
            id: Math.random(),
            text: todoText,
            done: false
        }

        if (todoText != "") {
            addTodo(newTodo)
            setTodoText("")
        }

    }

    return (
        <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
            <Input
                placeholder="New todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add Todo</Button>
        </Grid>
    );
}

export default AddTodo