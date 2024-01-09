import './TodoCounter.css';
import { useState, useEffect } from 'react';


function TodoCounter({ tasksCount, tasksDone }){
    
    let [title, setTitle] = useState('');

    useEffect(() => setTitle(tasksCount > 0 ? `Has completado ${tasksDone} de ${tasksCount} TASKS` : 'Ingresa TASKS para completar!' ));

    return (
            <h1>
                { title }
            </h1>
    );
}

export { TodoCounter }; 