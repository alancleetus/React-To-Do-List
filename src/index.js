import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import ToDoList from './components/to_do_list'
import './css/styles.css'

class App extends Component{
  
  constructor(){
    super()
    this.state = {
      inputValue:'',
      list:[],
      nextKey:0 
    }
  }

  handleInput(event){
    this.setState({inputValue:event.target.value})
  }
  
  handleAdd(){
    if(this.state.inputValue === '') 
      return

    const newToDo = {
      id:this.state.nextKey, 
      text:this.state.inputValue, 
      done:false}

    this.setState((currentState) => { 
      return {
          inputValue:'',  
          list:[...currentState.list, newToDo],  
          nextKey:currentState.nextKey+1  
        }
    })
  }

  handleDone(item){
    console.log('Removing: ',item.text)

    this.setState((currentState)=>{       
      
      const filteredList = currentState.list.filter( i => i.id !== item.id)

      const list = [...filteredList, {
        id:item.id,
        text:item.text, 
        done:true}]

      return {list}
      })

      console.log('Updating state...')  
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
          key={this.state.nextKey}
          handleDone={this.handleDone.bind(this)}
          />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
