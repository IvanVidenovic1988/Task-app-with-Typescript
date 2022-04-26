import React from 'react'
import './styles.css'
import { Todo } from '../toDoModel'
import SingleTodoCard from './SingleTodoCard';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
        {todos.map((todo) => (
            <SingleTodoCard 
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
            />
        ))}
    </div>
  )
}

export default ToDoList