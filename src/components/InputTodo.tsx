import React from 'react'
// import debugLib form 'debug'


interface InputTodoProps {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e:React.FormEvent)=>void;
}
const InputTodo: React.FC<InputTodoProps> = (props) => {

   

    return (
        <>


            <form onSubmit={props.handleSubmit}>

                <input
                    type="text"
                    value={props.todo}
                    onChange={(e) => { props.settodo(e.target.value) }} // Use local state for input
                    placeholder="Enter todo"
                />
                <button type="submit">Add</button>
            </form>
        </>

    )
}

export default InputTodo
