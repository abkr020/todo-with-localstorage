import React, { useEffect, useRef, useState } from 'react'
import './styles/DisplayTodo.css'
import log from '../debugging/debug';
import { SingleTodoObject } from '../model/SingleTodoModel';

interface SingleTodoProps {
    singleTodo: SingleTodoObject,
    todos: SingleTodoObject[],
    setTodos: React.Dispatch<React.SetStateAction<SingleTodoObject[]>>,

    handleTodoDone: (aid: number) => void,
    handleTodoDelete: (aid: number) => void
    handleTodoEdit: (aid: number) => void
}

const DisplayTodo: React.FC<SingleTodoProps> = (props) => {
    const inputref = useRef<HTMLInputElement>(null)
    const [checkEdit, setCheckEdit] = useState<boolean>(false)
    const [editValue, setEditvalue] = useState<string>(props.singleTodo.text + props.singleTodo.debug_index)
    log("initial value of", editValue)
    const handleTodoEdits = (todoobj: object) => {
        setCheckEdit(checkEdit ? false : true)
        if (!checkEdit) {
            setEditvalue(props.singleTodo.text);  // Ensure that the editValue is set correctly
            // props.setTodos
            log("new value", editValue)
        }
        log("edit todo", todoobj)
    }


    const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>, editId: number) => {
        e.preventDefault();
        log("all todo s", props.todos)
        props.setTodos(props.todos.map(todo => todo.id === editId ? { ...todo, text: editValue } : todo))
        log("all todo s after change", props.todos)
        setCheckEdit(false)

    }

    const handleOnChangeEdit = (e: React.ChangeEvent<HTMLInputElement>, debug_index?: number) => {
        setEditvalue(e.target.value)
        log("change of todo text", debug_index)
        log("new value on change", editValue)


    }
    useEffect(() => {
        inputref.current?.focus();
    }, [checkEdit])
    return (
        <div className={`display__todo ${process.env.VITE_NODE_ENV ? 'dev-mode' : ''} ${props.singleTodo.isDone ? 'completed__todo' : ''}`}>
            {/* <strong>here</strong> */}
            {props.singleTodo.debug_index}
            <div className={`display__todo__single `}>
                {/* {props.id} */}
                {checkEdit ?
                    <form action="" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleTodoSubmit(e, props.singleTodo.id)}>

                        <input
                            ref={inputref}
                            value={editValue}
                            onChange={(e) => handleOnChangeEdit(e)}
                        // onSubmit={() => handleTodoSubmit(props.singleTodo.id)}
                        />
                    </form>

                    // </input>
                    :
                    <span>{props.singleTodo.text}</span>
                }
                {/* {props.singleTodo.text} */}
                {process.env.VITE_NODE_ENV ?
                    <s>
                        {props.singleTodo.id}
                        {props.singleTodo.isDone ? "done" : "not"}
                        {/* {log("ak",props.singleTodo.isDone)} */}

                    </s> : ""}
            </div>
            <div className='display__todo__buttons'>
                <button onClick={() => handleTodoEdits(props.singleTodo)}>edit</button>
                <button onClick={() => props.handleTodoDelete(props.singleTodo.id)}>delete</button>
                <button onClick={() => props.handleTodoDone(props.singleTodo.id)}>{props.singleTodo.isDone ? "completed" : "done"}</button>
            </div>
            {/* <div>
                ak
            </div> */}
            {/* <strong>end</strong> */}
        </div>
    )
}

export default DisplayTodo
