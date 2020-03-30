import React, { Component } from 'react';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import { connect} from 'react-redux';

class CounterContainer extends Component {
    handleIncrement = () => {
        const {increment} = this.props;
        increment();
    }

    handleDecrement = () => {
        const {decrement} = this.props;
        decrement();
    }

    render() {
        const {number, color} = this.props;
        return <Counter onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} value={number} color={color} />
    }
}

const mapStateToProps = state => ({
    number: state.counter.number,
    color: state.counter.color
});
// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
// });
const mapDispatchToProps = { increment, decrement};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);