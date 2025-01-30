import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import debugLib from 'debug';

const debug = debugLib('app:todo')

interface ITodos {
    PropertyTodo: string;
}
const Todo: React.FC = () => {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<ITodos[]>([])
    debug("value of todo", todos)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        debug("handle submit")
        setTodos([...todos,{PropertyTodo:todo}])
        setTodo(''); // Clear the input after submit

    };
    return (
        <div>
            <InputTodo todo={todo} settodo={setTodo} handleSubmit={handleSubmit} />
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todo
