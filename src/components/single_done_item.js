import React from 'react'

function createList({list, handleRemove})
{
  return list.map(item => {

      return (<li className="done-item" key={item.id}>
        <span>{item.text} </span>
        <button onClick={()=>handleRemove(item)}>Delete</button>
      </li>)    
  })
}

const SingleDoneItem = (props)=>{
  return (
    <div>
        {createList(props)}
    </div>
  )
}

export default SingleDoneItem