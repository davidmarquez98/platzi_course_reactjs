import { TodoItem } from './../todoitem/TodoItem';
import './TodoList.css';


function TodoList({ tasks, setTasks }){

    const changeTodoState = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].state = !updatedTasks[index].state;
        setTasks(updatedTasks);
    }

    const deleteTodo = (index) => {
        let updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <ul>
            {tasks.map((task, index) => ( 
                                            <div className='container-item' key={ index }>
                                                <TodoItem task={ task } 
                                                          changeTodoState={() => changeTodoState(index)}/>
                                                <button className={task.state ? 'button-delete button-delete-green' : 'button-delete button-delete-red'} 
                                                        onClick={ () => deleteTodo(index)}><span>-</span>
                                                </button>
                                            </div> )) }
        </ul>
    )
}

export { TodoList }