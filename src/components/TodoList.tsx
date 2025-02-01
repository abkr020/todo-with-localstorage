import React from 'react'
import DisplayTodo from './DisplayTodo';
import { SingleTodoObject } from '../model/SingleTodoModel';
import { log } from '../debugging/debug';

  interface TodoListProps {
    todos: SingleTodoObject[],
    setTodos:React.Dispatch<React.SetStateAction<SingleTodoObject[]>>
  }
  
const TodoList:React.FC<TodoListProps> = (props) => {
  const handleTodoDone = (id:number)=>{
    // log("here a", id);
    // props.setTodos()
    props.setTodos(props.todos.map((todo)=>{
      if(todo.id==id){
      
        todo.isDone=todo.isDone ? false : true;
        // log("fwe",a)
      }
      return todo;
    }))

  }
  const handleTodoDelete=(id:number)=>{
    log("deleting todo id", id);
    // props.setTodos()
    props.setTodos(props.todos.filter(todo=>todo.id!=id))

  }
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            <DisplayTodo singleTodo={todo} handleTodoDone={handleTodoDone} handleTodoDelete={handleTodoDelete}/>
          </li> // Access and display Itodo from each ITodos object
        //   <li key={index}>{todo.PropertyTodo}</li> // Access and display Itodo from each ITodos object
        ))}
      </ul>
    </div>
  )
}

export default TodoList
