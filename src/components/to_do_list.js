import React from 'react'
import SingleToDo from './single_to_do'

const ToDoList = (props)=>{ 
  console.log(props)
  return (
    <div>
      <h3>To Do List</h3>
      <ul>
        <SingleToDo 
          list={props.list}
          handleDone={props.handleDone}
          key={props.key}
          />
      </ul>
    </div>
  )
}

export default ToDoList