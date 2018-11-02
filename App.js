import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import Styles from './components/StyleSheet';
import Counter from './components/Counter';

export default class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    type: "Work",
    text: "Press \"Start work\" to turn on the timer",
    count: 0,
    minutes: 25,
    seconds: 0,
    workButton:false,
    breakButtons: true
  }
}

startWork() {
  this.interval = setInterval(() => {this.decrement()}, 1000);
  this.setState({
    type: "Work",
    text: 'Now you are working,\n there are still to break:',
    minutes: 0,
    count: 10,
    workButton: !this.state.workButton,
    seconds: this.state.count
  })
}

startShortBreak() {
  this.interval = setInterval(() => {this.decrement()}, 1000);
  this.setState({
    type: "Short Break",
    text: "You have a break now,\nreturn to work for:",
    minutes: 0,
    count: 3,
    breakButtons: !this.state.breakButtons
  })
}

startLongBreak() {
  this.interval = setInterval(() => {this.decrement()}, 1000);
  this.setState({
    type: "Long Break",
    text: "You have a break now,\nreturn to work for:",
    minutes: 0,
    count: 5,
    breakButtons: !this.state.breakButtons
  })
}

componentDidUpdate() {
  if(this.state.minutes===0 && this.state.count===0) {
    clearInterval(this.interval);
    if(this.state.text !== 'Time for a break\nPress the appropriate button')
    this.setState({
      text: 'Time for a break\nPress the appropriate button'
    })
    if(this.state.breakButtons && this.state.type==='Work'){
    this.setState({
      breakButtons: !this.state.breakButtons,
    })
  }
    if((this.state.type==="Short Break" || this.state.type==="Long Break") && this.state.workButton ){
      this.setState({
        workButton: false
      })
    
  }
  }
  else if(this.state.count<0) {
    this.setState({
      count: 59,
      minutes: this.state.minutes -1,
    })
  }

  if(this.state.count >60) {
    this.setState({
      minutes: Math.floor(this.state.count/60),
      count: this.state.count%60,
    })
  }
}


decrement = () => {
  this.setState(prevState => ({
      count: prevState.count - 1,
  }))
}



  render() {
    [Styles.breakButton, {backgroundColor: '#000'}]
      return(

        <View style={Styles.container}>
        <View style={Styles.title}>
        <Text style={Styles.title}>The Best{'\n'}Pomodoro App</Text>
        </View>
        <Text style={Styles.subtitle}>{this.state.text}</Text>
        <Counter count={this.state.count} minutes={this.state.minutes}/>
        <View style={Styles.breakButtons}>
          <TouchableOpacity style={this.state.breakButtons ? Styles.disabledBreakButton :Styles.breakButton} disabled={this.state.breakButtons} onPress={() => this.startShortBreak()}><Text style={Styles.buttonLabel}>SHORT BREAK{'\n'}(5 min)</Text></TouchableOpacity>
          <TouchableOpacity style={this.state.breakButtons ? Styles.disabledBreakButton :Styles.breakButton} disabled={this.state.breakButtons} onPress={() => this.startLongBreak()}><Text style={Styles.buttonLabel}>LONG BREAK(10 min)</Text></TouchableOpacity>
          </View>
         <View style={Styles.breakButtons}>
          <TouchableOpacity style={this.state.workButton ? Styles.disabledWorkButton :Styles.workButton} disabled={this.state.workButton} onPress={() => this.startWork()}><Text style={Styles.buttonLabel}>START WORK</Text></TouchableOpacity>
          </View>
        </View>
      );  
  }
}
