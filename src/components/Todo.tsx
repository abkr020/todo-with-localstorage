import React, { useEffect, useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import log from '../debugging/debug'
import { SingleTodoObject } from '../model/SingleTodoModel'


const Todo: React.FC = () => {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<SingleTodoObject[]>(() => {
        // Load stored todos from localStorage on initial render
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
      });    log("value of todo", todos)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTodos([...todos,{id:Date.now(),text:todo,isDone:false}])
        log("handle submit",todos)

        setTodo(''); // Clear the input after submit

    };
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    return (
        <div>
            <InputTodo todo={todo} settodo={setTodo} handleSubmit={handleSubmit} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todo
