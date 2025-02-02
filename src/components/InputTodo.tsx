import React from 'react'

import '../components/styles/InputTodo.css'
import log from '../debugging/debug';

interface InputTodoProps {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}
const InputTodo: React.FC<InputTodoProps> = (props) => {


    return (
        <>


<form className={`input__todo__form ${process.env.VITE_NODE_ENV ? 'dev-mode' : ''}`} onSubmit={props.handleSubmit}>

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
