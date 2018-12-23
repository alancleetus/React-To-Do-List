import React from 'react'

function createList(props)
{
  return props.list.map(item => {

      return (<li className="done-item" key={props.list.id}>
        <span>{item.text} </span>
        <button onClick={()=>props.handleRemove(item)}>Delete</button>
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