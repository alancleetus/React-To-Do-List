import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import SingleToDo from './components/single_to_do'
import SingleDoneItem from './components/single_done_item'
import './css/styles.css'

function ToDoList({list, handleDone}){ 
  return (
    <div>
      <h3>Pending: {list.length}</h3>
      <ul>
        <SingleToDo  
          list={list}
          handleDone={handleDone}
          />
      </ul>
    </div>
  )
}

const CurrentSearch = ({list:searchFilterList})=> {
  return (
    searchFilterList.map(({id, text, done})=>{
      return <li key={id} >{text} ({done?'Done':'Pending'})</li>
    }))
}

function DoneList({list, handleRemove}){ 
  return (
    <div>
      <h3>Done: {list.length}</h3>
      <ul>
        <SingleDoneItem  
          list={list}
          handleRemove={handleRemove}
          />
      </ul>
    </div>
  )
}

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      inputValue:'',
      list:[],
      nextKey:0 
    }
  }

  /* typing detected in input box */
  handleInput = ({target:{value}}) => {
    this.setState({inputValue:value})
  }
  
  /* add button clicked */
  handleAdd(){
    /* if no input return */
    if(this.state.inputValue === '') 
      return

    /* create new todo item object*/
    const newToDo = {
      id:this.state.nextKey, 
      text:this.state.inputValue, 
      done:false
    }

    /* update state: reset input box, add to list, update next key val */
    this.setState((currentState) => { 
      return {  
          inputValue:'',
          list:[...currentState.list, newToDo],
          nextKey:currentState.nextKey+1  
        }
    })
  }

  /* mark item done */
  handleDone = ({id, text}) => {

    /* update state */
    this.setState(currentState =>{       
      /* filter to remove done item */
      const filteredList = currentState.list.filter( i => i.id !== id)

      /* create a updated with updated done value  */
      const list = [...filteredList, {
        id,
        text, 
        done:true}]
      
      /* update list */
      return {list}
      })  
  }

  /* delete item */
  handleRemove({id}){

    /* update state */
    this.setState(currentState =>{       
      /* filter to remove done item */
      const list = currentState.list.filter( i => i.id !== id)
 
      /* update list */
      return {list}
      })  
  }
   
  render(){    
    
    return (
      <div>
        <Header />
        
        <input 
          type="text" 
          value={this.state.inputValue}
          onChange={(e)=>this.handleInput(e)} 
          placeholder="Insert item to do..."
          />

        <button onClick={()=>this.handleAdd()}>Add</button> 
        <hr style={{width:'50%'}}/>
        <CurrentSearch list={this.state.list.filter((item)=>{
          if(this.state.inputValue==='')
            return false
          return item.text.includes(this.state.inputValue)
    })}/>
        <hr style={{width:'50%'}}/>
        <ToDoList 
          list={this.state.list.filter((item)=> item.done===false)}
          handleDone={this.handleDone}
          />
          
        <DoneList 
          list={this.state.list.filter((item)=> item.done===true)}
          handleRemove={this.handleRemove.bind(this)}
          />
          
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
