import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Counter color={'lightblue'} size={16} />
      <Counter color={'skyblue'} size={32} />
      <Counter color={'steelblue'} size={80} />
      <Counter color={'darkblue'} size={140} />
    </View>
  );
}

class Counter extends Component { // Should be extended to Component to be a Component.
  state = {count: 0}  // Definiation of State.
  componentDidMount() { // componentDidMount lifecycle.
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)  // Update this component's state every 1 second.
  }

  render() {  // render() is the method to be called to present how this component looks like.
    const {count} = this.state // extract count from state.
    const {color, size} = this.props  // extract color and size from props. Props are passed by the component which using this component.

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

