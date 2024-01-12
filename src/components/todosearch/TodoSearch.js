import React from "react";
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
    saveTask
}){

    // const handleKeyUp = (event) => {
    //     if (event.key === 'Enter') { 
    //         event.preventDefault();
    //         if(searchValue == '\n'){
    //             console.log(searchValue);
    //             setSearchValue("aaaaaa");
    //             console.log(searchValue);
    //         }

    //         saveTask();
    //       }
    // };

    return (
        <>
        <textarea 
            className="textarea-add-todo"
            placeholder="Escribe aqui tu tarea"
            value={ searchValue }
            onChange={(event) => { setSearchValue(event.target.value) }}
            // onKeyUp={handleKeyUp}
        />
        </>
    )
}

export { TodoSearch };