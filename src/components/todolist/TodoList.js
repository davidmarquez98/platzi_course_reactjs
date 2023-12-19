import { TodoItem } from './../todoitem/TodoItem';


function TodoList({ tasks }){

    const iterarTodoItem = () => {
        return ( tasks.map((task, index) => ( <TodoItem key={ index } text={ task.text }></TodoItem> )) );
    }

    return (
        <ul>
            {tasks.map((task, index) => ( <TodoItem key={ index } text={ task.text }></TodoItem> )) }
        </ul>
    )
}

export { TodoList }