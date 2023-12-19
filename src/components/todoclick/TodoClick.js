import React from "react";

function TodoClick({ saveTask }){
    let [state, setState] = React.useState(0);

    const updateState = () =>{
        setState(state + 1);
    }

    return (
            <button onClick={ saveTask }>Click</button>
    )
}

export { TodoClick };