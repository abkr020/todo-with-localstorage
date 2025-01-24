import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import debugLib from 'debug';

const debug = debugLib('app:todo')

const Todo:React.FC = () => {

    const [todo , settodo] = useState<string>("a")
    debug("value of todo",todo)
  return (
    <div>
      <InputTodo todo={todo} settodo={settodo}/>
      <TodoList />
    </div>
  )
}

export default Todo
