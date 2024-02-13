import { TodoCounter } from '../components/todocounter/TodoCounter';
import { TodoSearch } from '../components/todosearch/TodoSearch';
import { TodoList } from '../components/todolist/TodoList';
import { TodoClick } from '../components/todoclick/TodoClick';
import { TodoIconos } from '../components/todoiconos/TodoIconos';
import { Task } from '../classes/Task';

import { FaRegTrashCan } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";


import './App.css';
import React from 'react';

function App() {

  /*  DATA */
  let [ searchValue , setSearchValue ] = React.useState('');

  let [tasks, setTasks] = React.useState([]);

  let [stateInput, setStateInput] = React.useState(false);


  /* FUNCIONES */
  let saveTask = () => {

    let newTask = new Task();

    if(searchValue != null && searchValue != ''){

      newTask.text = searchValue;
      setTasks([...tasks, newTask]);

      setSearchValue('');

    }
  }

  let showTasksDone = () => tasks.filter(task => task.state).length;

  const mainTitulo = "TASKY.";

  return ( 
    <div className='container-app'>
      <div className='container-nav'>
        <div className='content-nav'>
          <div className='container-main-titulo'>
            <div className='content-main-titulo'>
              <span className='main-titulo'>{mainTitulo}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='container-top-card'>
        <div className='content-top-card'>
          <div className='container-titulo'>
            <div className='content-titulo'>
              <TodoCounter tasksCount={ tasks.length } tasksDone={ showTasksDone() }/>
            </div>
          </div>
          <div className='container-linea'>
            <div className='content-linea'>
              <div className='linea'></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container-busqueda'>
        <div className='content-busqueda'>
          <input placeholder='¿Que queres buscar?'
                  className='input-busqueda'/>
        </div>
      </div> */}

      <div className="container-card" >
        <div className="content-card">

          <div className='card'>

            <div className="container-lista">
              <div className="content-lista">
                <TodoList tasks= { tasks } setTasks={setTasks}/>
              </div>
            </div>

            { tasks.length > 1 ? 
                                  <div className='container-button-delete-all'>
                                    <div className='content-button-delete-all'>
                                      <button className='button-default button-delete-all' onClick={() => setTasks([])}>
                                        <FaRegTrashCan/>
                                      </button>
                                    </div>
                                  </div> :
                                  '' }
          </div>

          <div className={ stateInput ? 'container-input input-activated' : 'container-input' }>
            <div className='content-input'>
              <div className='content-input-arrow'>
                <TodoSearch 
                  searchValue={ searchValue }
                  setSearchValue={ setSearchValue }
                  saveTask={ saveTask }/>
                <button className="button-default button-arrow"
                        onClick={() => setStateInput(!stateInput)}>
                  <TiArrowSortedDown/>
                </button>
              </div>
              <TodoClick  saveTask={ saveTask }/>
             </div>
          </div>

        </div>

      </div>

      <div className='container-bottom'>
        <div className='content-bottom'>
            <div className='container-nombre'>
              <div className='content-nombre'> 
              <span className='nombre'>© David M.</span>
              </div>
            </div>
            <div className='container-iconos'>
              <div className='content-iconos'>
                <TodoIconos></TodoIconos>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
