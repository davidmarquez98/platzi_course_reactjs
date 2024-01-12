import './TodoCounter.css';
import { useState, useEffect } from 'react';


function TodoCounter({ tasksCount, tasksDone }){
    
    let [title, setTitle] = useState('');

    useEffect(() => {
        if(tasksCount > 0 && tasksDone != tasksCount){
            setTitle(`Has completado ${tasksDone} de ${tasksCount} TAREAS`);
        }else if(tasksDone == tasksCount && tasksDone != 0){
            setTitle('Hiciste todas las tareas!!');
        }else{
            setTitle('Ingresa TAREAS para completar!');
        }
    });

    return (
            <h1>
                { title }
            </h1>
    );
}

export { TodoCounter }; 