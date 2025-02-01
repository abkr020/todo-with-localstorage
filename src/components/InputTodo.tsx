import React from 'react'
// import debugLib form 'debug'

import '../components/styles/InputTodo.css'
interface InputTodoProps {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e:React.FormEvent)=>void;
}
const InputTodo: React.FC<InputTodoProps> = (props) => {

   

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
