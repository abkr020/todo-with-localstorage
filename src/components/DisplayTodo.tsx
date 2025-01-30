import React from 'react'
import './styles/DisplayTodo.css'
import debugLib from 'debug';
import log, { createDebug } from '../debugging/debug';

const customLog = createDebug('app:DisplayTodo');


customLog('Custom log for a specific namespace');
interface SingleTodoProps {
    singleTodo: string;
    id:number;
}

const DisplayTodo: React.FC<SingleTodoProps> = (props) => {
    const a= 't';
    const handleDone = (id:number)=>{
        customLog('here Custom log: Additional debug info'); // Logs with the `app:DisplayTodo` namespace
        log("here a",id);

        props.singleTodo='ak'

    }
    return (
        <div className='display__todo'>
            {/* <strong>here</strong> */}
            <div className='display__todo__single'>
                {/* {props.id} */}
                {props.singleTodo}
            </div>
            <div className='display__todo__buttons'>
                <button>edit</button>
                <button>cut</button>
                <button onClick={()=>handleDone(props.id)}>done</button>
            </div>
            {/* <div>
                ak
            </div> */}
            {/* <strong>end</strong> */}
        </div>
    )
}

export default DisplayTodo
