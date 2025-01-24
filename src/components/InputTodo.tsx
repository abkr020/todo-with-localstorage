import React from 'react'
// import debugLib form 'debug'


interface InputTodoProps{
    todo:string;
    settodo:React.Dispatch<React.SetStateAction<string>>;
}
const InputTodo:React.FC<InputTodoProps> = (props) => {

  return (
    <>
    <div>
        <input type="text" value={props.todo} onChange={(e)=>{props.settodo(e.target.value)}} />
      
    </div>
    <div>
        <button>add</button>
    </div>

    </>

  )
}

export default InputTodo
