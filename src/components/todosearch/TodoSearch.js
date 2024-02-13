import React from "react";
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue
}){

    return (
        <>
            <textarea 
                className="textarea-add-todo"
                placeholder="Escribe aqui tu tarea"
                value={ searchValue }
                onChange={(event) => { setSearchValue(event.target.value) }}
            />
        </>
    )
}

export { TodoSearch };