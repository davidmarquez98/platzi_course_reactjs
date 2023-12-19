import React from "react";

function TodoSearch({
    searchValue,
    setSearchValue,
    saveTask
}){

    const handleKeyUp = (event) => {
        
        if (event.key === 'Enter') { 
            saveTask();
          }
    };

    return (
        <>
        <input 
            placeholder="Escribir aqui"
            value={ searchValue }
            onChange={(event) => { setSearchValue(event.target.value); }}
            onKeyUp={handleKeyUp}></input>
        </>
    )
}

export { TodoSearch };