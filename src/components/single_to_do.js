import React from 'react'

function createList({list, handleDone})
{
  return list.map(item => {
    return (
      <li className="li-to-do" key={item.id}>
        <span>{item.text} </span>
        <button onClick={()=>handleDone(item)}>Done</button>
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