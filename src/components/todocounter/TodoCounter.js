import './TodoCounter.css';


function TodoCounter({ tasksCount, tasksDone }){
    return (
            <h1>
                { tasksCount > 0 ? `Has completado ${ tasksDone } de ${ tasksCount } TASKS` : 'Ingresa TASKS para completar!' }
            </h1>
    );
}

export { TodoCounter }; 