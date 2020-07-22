import React from 'react';
import {Component} from 'react';

class TodoItem extends Component{
    handleCheck(){
        console.log("checked");
    }
    render(){
        return(
        <div className="todo-item">
        <input type="checkbox" checked= {this.props.item.completed} onChange = {this.handleCheck}></input>
        <p>{this.props.item.text}</p>
        </div>)
    }
}
export default TodoItem;