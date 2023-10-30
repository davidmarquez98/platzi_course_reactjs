import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

function App() {
  return ( 
    <div className='app'>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem></TodoItem>
      </TodoList>
    </div>
  );
}

function TodoItem(){
  return (
    <li>
      <span>Esto es un item</span>
    </li>
  )
}

export default App;
