import React, { Component } from 'react'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

import './index.css' 

export default class Header extends Component {
    handleKeyUp=(event)=>{
        const {keyCode,target}=event

        if (keyCode!==13)return
        if(target.value.trim()===''){alert('請輸入')
        return}


        // todo對象
        const todoObj={id:nanoid(),name:target.value,done:false}

        // 將todoObj傳給app

    this.props.addTodo(todoObj)
    target.value=''
}

  render() {
    return (
        <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入 按下ＥＮＴＥＲ"/>
      </div>
    )
  }
}