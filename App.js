import React, { Component } from 'react';

import TodoItem from './TodoItem';
import todoData from './todoData';

import './style.css';

class App extends Component{
   constructor(){
      super()
      this.state = {
         todos : todoData
      }
   }
   render(){
      const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item} />);
      return(
         <div>
           {todoItems}
         </div>
      );
   }
}
export default App;