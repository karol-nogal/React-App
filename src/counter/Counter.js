import React, { Component } from 'react';
import { Button } from "semantic-ui-react";

const COUNTER_API_ENDPOINT = 'https://rest-api-jfdz12.firebaseio.com/counter.json';

class Counter extends Component {
    state = {
        counter: null
    };

    fetchCounterValue = () => {
        fetch(COUNTER_API_ENDPOINT)
            .then(res => res.json())
            .then(value => this.setState({ counter: value }))
    }

    handleIncreaseClick = () => {
        fetch(COUNTER_API_ENDPOINT, {
            method: 'PUT',
            body: this.state.counter + 1
        }).then(() => this.fetchCounterValue())
    }

    handleDecreaseClick = () => {
        fetch(COUNTER_API_ENDPOINT, {
            method: 'PUT',
            body: this.state.counter - 1
        }).then(() => this.fetchCounterValue())
    }

    handleResetClick = () => {
        fetch(COUNTER_API_ENDPOINT, {
            method: 'PUT',
            body: 0
        }).then(() => this.fetchCounterValue())
    }

    componentDidMount() {
        this.fetchCounterValue();
    }

    render() {
        return <>
            <h1>Counter: {this.state.counter !== null ?  this.state.counter : '...'}</h1>
            <Button color='red' onClick={this.handleDecreaseClick}>-</Button>
            <Button onClick={this.handleResetClick}>reset</Button>
            <Button color='green' onClick={this.handleIncreaseClick}>+</Button>
        </>
    }
}

export default Counter;