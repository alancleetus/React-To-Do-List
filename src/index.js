import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import SingleToDo from './components/single_to_do'
import SingleDoneItem from './components/single_done_item'
import './css/styles.css'

function ToDoList(props){ 
  return (
    <div>
      <h3>Pending: {props.list.length}</h3>
      <ul>
        <SingleToDo 
          list={props.list}
          handleDone={props.handleDone}
          />
      </ul>
    </div>
  )
}

function DoneList(props){ 
  return (
    <div>
      <h3>Done: {props.list.length}</h3>
      <ul>
        <SingleDoneItem 
          list={props.list}
          handleRemove={props.handleRemove}
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
  handleInput = (event) => {
    this.setState({inputValue:event.target.value})
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
  handleDone = (item) => {

    /* update state */
    this.setState(currentState =>{       
      /* filter to remove done item */
      const filteredList = currentState.list.filter( i => i.id !== item.id)

      /* create a updated with updated done value  */
      const list = [...filteredList, {
        id:item.id,
        text:item.text, 
        done:true}]
      
      /* update list */
      return {list}
      })  
  }

  /* delete item */
  handleRemove(item){

    /* update state */
    this.setState(currentState =>{       
      /* filter to remove done item */
      const list = currentState.list.filter( i => i.id !== item.id)
 
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
        <hr />

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
