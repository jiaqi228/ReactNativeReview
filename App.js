import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import List from './List'
import Input from './Input'
import Title from './Title'
import store from './store'
import { actionCreators } from './todoListRedux'


export default class App extends Component {
  state = {}

  componentWillMount(){
    const {todos} = store.getState()
    this.setState({todos})

    this.unsubscribe = store.subscribe(()=>{
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.state

    return (
      <SafeAreaView>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </SafeAreaView>
    )
  }
}