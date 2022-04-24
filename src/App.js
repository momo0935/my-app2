
import React, { Component } from 'react'
import logo from './logo.svg';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';




export default class App extends Component{
// 初始化狀態

state={todos:[
{id:'001',name:'aa',done:true},
{id:'002',name:'bb',done:false},
{id:'003',name:'cc',done:true},


]}
// 新增todo
addTodo=(todoObj)=>{
// 取得原來todo
const {todos}=this.state

// 追加todo
const newTodos=[todoObj,...todos]
// 更新todo

this.setState({todos:newTodos})

}

// 勾選狀態
updateTodo=(id,done)=>{
const{todos}=this.state
const newTodos=todos.map((todoObj)=>{
  if(todoObj.id===id) return{...todoObj,done}
  else return todoObj})
  this.setState({todos:newTodos})
}

// 刪除todo

deleteTodo=(id)=>{
  const {todos}=this.state
const newTodos= todos.filter((todoObj)=>{
  return todoObj.id!==id})
  this.setState({todos:newTodos})
  
}
//全選
checkAllTodo=(done)=>{
  const{todos}=this.state
  const newTodos= todos.map((todoObj)=>{
return{...todoObj,done}})
this.setState({todos:newTodos})
  }
//清除所有已完成
  ClearAllDone=(done)=>{
    const{todos}=this.state
    const newTodos= todos.filter((todoObj)=>{
  return todoObj.done===false})
  this.setState({todos:newTodos})
    }

  render(){
    const {todos}=this.state
    return(
      <div className="todo-container">
      <div className="todo-wrap">
       <Header addTodo={this.addTodo}/>
      <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
       <Footer todos={todos} checkAllTodo={this.checkAllTodo} ClearAllDone={this.ClearAllDone}/>
      </div>
    </div>

    )
  }
} 

