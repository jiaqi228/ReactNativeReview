import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'


export default class App extends Component {
  state = {
    todos: ['Click to remove', 'Learn React Native', 'Write code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state
    this.setState({
      todos: [text, ...todos]
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter((todo,i) => i!=index)
    })
  }

  render() {
    const {todos} = this.state

    return(
      <SafeAreaView>
        <Title>
          To-Do List
        </Title>
        <Input placeholder={'Tyle a todo, then hit enter!'} onSubmitEditing={this.onAddTodo} />
        <List list={todos} onPressItem={this.onRemoveTodo}/>
      </SafeAreaView>
    )
  }
}