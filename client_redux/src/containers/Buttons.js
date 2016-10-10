import React, {Component} from 'react';
import Incre from '../components/Incre'

import * as types from '../actions'
import {connect} from 'react-redux';

// const defaultProps = {
//     number: -1
// }

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.setText = this.setText.bind(this);
    }

    setText(e){
        const text = e.target.value
        this.props.handleTyping(text)
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
        handleIncrement:() => {dispatch(types.incre())},
        handleDecrement:() => {dispatch(types.decre())},
        handleTimes:() => {dispatch(types.times1())},
        handleDivide:() => {dispatch(types.divide1())},
        handleTyping:(text) => {dispatch(types.typing(text))},
        handleIncrement1:() => {
          return dispatch(types.increment1())
        },
        handleDecrement1:() => {
          return dispatch(types.decrement1())
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Buttons);
