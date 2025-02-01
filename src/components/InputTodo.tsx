import React from 'react'
// import debugLib form 'debug'

import '../components/styles/InputTodo.css'
import log from '../debugging/debug';


// Now you can access them using process.env
// console.log("here",process.env.VITE_API_URL);
interface InputTodoProps {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}
const InputTodo: React.FC<InputTodoProps> = (props) => {
log("here",process.env.VITE_API_URL);
log("here one",process.env.VITE_NODE_ENV);
log("here check",process.env.VITE_CHECK);


    return (
        <>


            <form className='input__todo__form' onSubmit={props.handleSubmit}>

                <input
                    className='input__todo'
                    type="text"
                    value={props.todo}
                    onChange={(e) => { props.settodo(e.target.value) }} // Use local state for input
                    placeholder="Enter todo"
                />
                <button className='input__todo__add__button' type="submit">Add</button>
            </form>
        </>

    )
}

export default InputTodo
