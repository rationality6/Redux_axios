import React, {Component} from 'react';
import Incre from '../components/Incre'

import * as actions from '../actions'
import {connect} from 'react-redux';

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.setText = this.setText.bind(this);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setText(e){
    const text = e.target.value
    this.props.handleTyping(text)
  }

  setRandomColor(){
    random()
  }

  render() {
    return (
      <div>
        {this.props.number} |
        {this.props.text}
        <Incre
          onIncre={this.props.handleIncrement}
          onDecre={this.props.handleDecrement}
          onTimes={this.props.handleTimes}
          onDivide={this.props.handleDivide}
          onIncrement1={this.props.handleIncrement1}
          onDecrement1={this.props.handleDecrement1}
          number={this.props.number1}
        ></Incre>
        <input
          onChange={this.setText}
          value={this.props.text}
        />
        <div>
          <button
            onClick={this.setRandomColor}
          >change</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.incre.number,
    number1: state.counter1.number,
    text: state.incre.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions,dispatch);
  return{
    handleIncrement:() => {dispatch(actions.incre())},
    handleDecrement:() => {dispatch(actions.decre())},
    handleTimes:() => {dispatch(actions.times1())},
    handleDivide:() => {dispatch(actions.divide1())},
    handleTyping:(text) => {dispatch(actions.typing(text))},
    handleIncrement1:() => {
      return dispatch(actions.increment1())
    },
    handleDecrement1:() => {
      return dispatch(actions.decrement1())
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
