import { TodoItem } from './../todoitem/TodoItem';
import './TodoList.css';


function TodoList({ tasks }){

    const iterarTodoItem = () => tasks.map((task, index) => <TodoItem key={ index } text={ task.text }></TodoItem>);

    return (
        <ul>
            {tasks.map((task, index) => ( <TodoItem key={ index } text={ task.text }></TodoItem> )) }
        </ul>
    )
}

export { TodoList }