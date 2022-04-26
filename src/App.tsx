import React from 'react';
import './App.css';
import { useState } from 'react';
import { Todo } from './toDoModel';
import InputField from './components/InputField';
import ToDoList from './components/TodoList';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {
      setTodos(
        [...todos,
        { id: Date.now(), todo, isDone: false}])
        setTodo("");       
    }
  }

console.log(todo)
console.log(todos)
  

  return (
    <div className="App">

      <span className="heading">
        Taskify
      </span>

      <InputField 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}
      />

      <ToDoList 
        todos={todos}
        setTodos={setTodos} 
      />
      
    </div>
  );
}

export default App;
