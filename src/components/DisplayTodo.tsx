import React, { useState } from 'react'
import './styles/DisplayTodo.css'
import log from '../debugging/debug';
import { SingleTodoObject } from '../model/SingleTodoModel';

interface SingleTodoProps {
    singleTodo: SingleTodoObject,
    handleTodoDone: (aid: number) => void,
    handleTodoDelete: (aid: number) => void
    handleTodoEdit: (aid: number) => void
}

const DisplayTodo: React.FC<SingleTodoProps> = (props) => {
    const [checkEdit, setCheckEdit] = useState<boolean>(false)
    const [editValue, setEditvalue] = useState<string>(props.singleTodo.text)
    const handleTodoEdits = (id: number) => {
        setCheckEdit(checkEdit ? false : true)
        log("edit", id)
    }
    const handleOnChangeEdit = (e: React.ChangeEvent<HTMLInputElement>)=>{
        log("ok")
        setEditvalue(e.target.value)

    }
    return (
        <div className={`display__todo ${process.env.VITE_NODE_ENV ? 'dev-mode' : ''} ${props.singleTodo.isDone ? 'completed__todo' : ''}`}>
            {/* <strong>here</strong> */}
            <div className={`display__todo__single `}>
                {/* {props.id} */}
                {checkEdit ?
                    <input
                        value={editValue}
                        onChange={(e)=>handleOnChangeEdit(e)}
                    />

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
                <button onClick={() => handleTodoEdits(props.singleTodo.id)}>edit</button>
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
