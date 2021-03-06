import React, { Component } from 'react';

import TodoItem from './TodoItem';
import todoData from './todoData';
import Header from './Header';

import './style.css';

class App extends Component{
   constructor(){
      super()
      this.state = {
         todos : todoData
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(id){

      console.log("Box: " + id)

      this.setState(prevState => {
            const updateTodos = prevState.todos.map((todo) =>{
               if(todo.id===id){
                  todo.completed =  !todo.completed
               }
               return todo
            })
            return { todos: updateTodos } 
      })

   }

   render(){
     
      const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} handleChange = {this.handleChange} />);
      return(
         <div className="todo-list"><Header />{todoItems}</div>  
      );
   }
}
export default App;