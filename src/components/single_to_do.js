import React from 'react'

function createList(props)
{
  return props.list.map(item => {
      return <li key={props.key}>
        <span>{item.text} </span>
        <button onClick={()=>props.handleDone(item)}>X</button>
      </li>
    
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