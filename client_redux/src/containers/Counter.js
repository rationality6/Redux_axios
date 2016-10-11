import React, {Component} from 'react';
import Value from '../components/Value'
import Control from '../components/Control'

// import * as actions from '../actions'
import * as actions from '../actions'
import {connect} from 'react-redux';
// import {connect, bindActionCreators} from 'react-redux';

const defaultProps = {
  text: ''
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
    this.handleTextCopy = this.handleTextCopy.bind(this);
    this.handleRandomNumber = this.handleRandomNumber.bind(this);
    this.getTextData = this.getTextData.bind(this);
  }

  handleRandomNumber(){
    const randomNumber = ~~(Math.random()*255)
    this.props.setRandomNumber(randomNumber)
  }

  setRandomColor(){
    const color = [
      Math.floor((Math.random()*55)+ 200),
      Math.floor((Math.random()*55)+ 200),
      Math.floor((Math.random()*55)+ 200),
    ]
    this.props.handleSetColor(color);
  }

  handleTextCopy(e){
    const text = e.target.value
    this.props.handleTextCopy(text)
  }

  getTextData(){
    const userInputData = prompt()
    this.props.handleChangeText(userInputData)
  }

  render() {
    const color = this.props.color;
    const style = {
      background: `rgb(${color[0]},${color[1]},${color[2]})`
    }
    return(
      <div style={style}>Counter
        <Value number={this.props.number}></Value>
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onTimes={this.props.handleTimes}
          onDivide={this.props.handleDivide}
          onRandomNumber={this.handleRandomNumber}
          onRandomizeColor={this.setRandomColor}
        ></Control>
        <p>
          {this.props.text}
        </p>
        <input
          value={this.props.text}
          onChange={this.handleTextCopy}
        />
        <div>
          {this.props.title}
          <button onClick={this.getTextData}>Change</button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
    dumbObject: state.counter.dumbObject,
    text: state.typeCopy.text,
    title: state.changeText.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions,dispatch);
  return{
    handleIncrement:() => {dispatch(actions.increment())},
    handleDecrement:() => {dispatch(actions.decrement())},
    handleTimes:() => {dispatch(actions.times())},
    handleDivide:() => {dispatch(actions.divide())},
    setRandomNumber:(num)=> {dispatch(actions.randomNumber(num))},
    handleSetColor:(color) => {dispatch(actions.setColor(color))},
    handleTextCopy:(text) => {dispatch(actions.typeCopy(text))},
    handleChangeText:(text) => {dispatch(actions.changeText(text))}
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
