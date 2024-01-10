import './TodoItem.css'

function TodoItem({ task, changeTodoState }){
    return (
      <li className={ task.state ? 'done' : 'notDone'} onClick={changeTodoState}>
        <span>{ task.text }</span>
      </li> 
    )
  }

export { TodoItem };