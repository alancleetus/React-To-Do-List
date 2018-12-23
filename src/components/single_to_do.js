import React from 'react'

function createList(props)
{
  return props.list.map(item => {
    return (
      <li className="li-to-do" key={props.list.id}>
        <span>{item.text} </span>
        <button onClick={()=>props.handleDone(item)}>Done</button>
      </li>)    
  })
}

const SingleToDo = (props)=>{
  return (
    <div>
        {createList(props)}
    </div>
  )
}

export default SingleToDo