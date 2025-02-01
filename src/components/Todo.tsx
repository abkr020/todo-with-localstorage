import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import log from '../debugging/debug'

interface ITodos {
    ProperTodo: string;
}
const Todo: React.FC = () => {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<ITodos[]>([])
    log("value of todo", todos)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        log("handle submit")
        setTodos([...todos,{ProperTodo:todo}])
        setTodo(''); // Clear the input after submit

    };
    return (
        <div>
            <InputTodo todo={todo} settodo={setTodo} handleSubmit={handleSubmit} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Todo
