import React from 'react'
import './styles/DisplayTodo.css'
import log from '../debugging/debug';
import { SingleTodoObject } from '../model/SingleTodoModel';

interface SingleTodoProps {
    singleTodo: SingleTodoObject,
    handleTodoDone:(aid:number)=>void,
    handleTodoDelete:(aid:number)=>void
}

const DisplayTodo: React.FC<SingleTodoProps> = (props) => {
    const a = 't';
  
    return (
        <div className={`display__todo ${process.env.VITE_NODE_ENV ? 'dev-mode' : ''} ${props.singleTodo.isDone ? 'completed__todo' : ''}`}>
            {/* <strong>here</strong> */}
            <div className={`display__todo__single `}>
                {/* {props.id} */}
                {props.singleTodo.text}
                {process.env.VITE_NODE_ENV ?
                    <s>
                        {props.singleTodo.id}
                        {props.singleTodo.isDone ? "done" : "not"}
                        {/* {log("ak",props.singleTodo.isDone)} */}

                    </s> : ""}
            </div>
            <div className='display__todo__buttons'>
                <button>edit</button>
                <button onClick={()=>props.handleTodoDelete(props.singleTodo.id)}>delete</button>
                <button onClick={() => props.handleTodoDone(props.singleTodo.id)}>{props.singleTodo.isDone ? "completed": "done"}</button>
            </div>
            {/* <div>
                ak
            </div> */}
            {/* <strong>end</strong> */}
        </div>
    )
}

export default DisplayTodo
