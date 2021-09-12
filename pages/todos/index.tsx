import React from 'react'
import { GetStaticProps } from "next";
import TodosCompIndex from '../../components/todos/ui'
import { getAllTodos } from '../../api/api'
import { ITodoModel } from '../../Interface/Interface';

export default function TodosPage({ todos }: { todos: ITodoModel[] }) {
    return (
        <div>
            <TodosCompIndex todos={todos} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const apiUrl = "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
    const todos = await getAllTodos(apiUrl);
    return {
        props: { todos },
        revalidate: 60
    }
}