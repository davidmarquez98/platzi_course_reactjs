import { TodoCounter } from '../components/todocounter/TodoCounter';
import { TodoSearch } from '../components/todosearch/TodoSearch';
import { TodoList } from '../components/todolist/TodoList';
import { TodoClick } from '../components/todoclick/TodoClick';
import { Task } from '../classes/Task';

import './App.css';
import React from 'react';

function App() {

  let [ searchValue , setSearchValue ] = React.useState("");

  let [tasks, setTasks] = React.useState([]);

  let saveTask = (event) => {

    let newTask = new Task();

    if(searchValue !== null && searchValue !== ''){

      newTask.text = searchValue;
      setTasks([...tasks, newTask]);

      setSearchValue('');

    }

  }

  let showTasksDone = () => tasks.filter(task => task.state).length;


  return ( 
    <div className='container-app'>

      <div className='container-titulo'>
        <div className='content-titulo'>
        <TodoCounter tasksCount={ tasks.length } tasksDone={ showTasksDone() }/>
        </div>
      </div>

      <div className="container-lista" >
        <div className="content-lista">
          <div className='container-subtitulo'>
            <div className='content-subtitulo'>
              <h3 className='subtitulo'>TAREAS</h3>
            </div>
          </div>
          <TodoList tasks= { tasks } setTasks={setTasks}/>
        </div>
      </div>

      <TodoSearch 
        searchValue={ searchValue }
        setSearchValue={ setSearchValue }
        saveTask={ saveTask }/>
      <TodoClick saveTask={ saveTask }/>
    </div>
  );
}

export default App;
