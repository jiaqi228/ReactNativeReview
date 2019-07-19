import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'

import List from './List'
import Input from './Input'
import Title from './Title'
import store from './store'
import { actionCreators } from './todoListRedux'


const mapStateToProps = (state) => ({
  todos: state.todos
})

class App extends Component {

  onAddTodo = (text) => {
    const {dispatch} = this.props
    dispatch(actionCreators.add(text))  // Change state by calling store.dispatch() method.
    // store.dispatch will call reducer method which was passed in it when store initialized.
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

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

export default connect(mapStateToProps)(App)