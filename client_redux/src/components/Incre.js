import React, {Component, PropTypes} from 'react';

const propTypes = {
    onIncre: PropTypes.func,
    onDecre: PropTypes.func,
};

const defaultProps = {
    onIncre() {console.warn('Incre is not defined')},
    onDecre() {console.warn('Decre is not defined')},
    number:-1
}

class Incre extends Component {

    render() {
        return (
            <div>
              <div>
                <button onClick={this.props.onIncre}>+1</button>
                <button onClick={this.props.onDecre}>-1</button>
              </div>
              <div>{this.props.number}</div>
              <div>
                <button onClick={this.props.onIncrement1}>+=1</button>
                <button onClick={this.props.onDecrement1}>-=1</button>
              </div>
            </div>
        );
    }
}

Incre.propTypes = propTypes;
Incre.defaultProps = defaultProps;

export default Incre;
