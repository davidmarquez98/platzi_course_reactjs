import React from "react";
import { FaPlus } from "react-icons/fa";
import './TodoClick.css';

function TodoClick({ saveTask }){
    let [state, setState] = React.useState(0);

    const updateState = () =>{
        setState(state + 1);
    }

    return ( <button className="button-default button-save" onClick={ saveTask }><FaPlus/></button> )
}

export { TodoClick };