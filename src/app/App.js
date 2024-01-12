import { TodoCounter } from '../components/todocounter/TodoCounter';
import { TodoSearch } from '../components/todosearch/TodoSearch';
import { TodoList } from '../components/todolist/TodoList';
import { TodoClick } from '../components/todoclick/TodoClick';
import { Task } from '../classes/Task';

import { FaRegTrashCan } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaGithubAlt as GitHubIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon} from "react-icons/fa";

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


  return ( 
    <div className='container-app'>
      <div className='container-iconos'>
        <div className='content-iconos'>
          <a href='https://github.com/davidmarquez98' target='_blank'>
            <button className='button-icon'>
              <GitHubIcon className='icono'/>
            </button>
          </a>
          <a href='https://www.linkedin.com/in/david-ariel-marquez/' target='_blank'>
            <button className='button-icon'>
              <LinkedinIcon className='icono'/>
            </button>
          </a>
        </div>
      </div>

      <div className='container-titulo'>
        <div className='content-titulo'>
        <TodoCounter tasksCount={ tasks.length } tasksDone={ showTasksDone() }/>
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
            <div className='container-subtitulo'>
              <div className='content-subtitulo'>
                <h3 className='subtitulo'>TAREAS</h3>
              </div>
            </div>

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

    </div>
  );
}

export default App;
