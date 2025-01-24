import React from 'react'

interface ITodosList {
    PropertyTodo: string;
  }
  
  interface TodoListProps {
    todos: ITodosList[]; // Change this to expect an array of ITodos objects
  }
  
const TodoList:React.FC<TodoListProps> = (props) => {
  return (
    <div>
      my all to so
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo.PropertyTodo}</li> // Access and display Itodo from each ITodos object
        ))}
      </ul>
    </div>
  )
}

export default TodoList
