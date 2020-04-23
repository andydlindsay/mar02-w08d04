import React, { Component } from 'react';

class ClassBased extends Component {
  constructor(props) {
    super();
    this.state = {
      message: 'welcome to week 8',
      internalCounter: props.counter * 2,
      counter: 0,
      key: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('I got clicked');
    console.log(this.state.message);
    // this is bad!!!!
    // this.state.counter += 1;
    this.setState({ counter: this.state.counter + 1, key: 'value' });
    // ...prev, key: value
  }
  
  render() {
    return (
      <div>
        <h2>Class-Based Component</h2>
        <p>{this.state.message}</p>
        {this.props.children[1]}
        <h3>InternalCounter: {this.state.internalCounter}</h3>
        <h2>Counter: {this.props.counter}</h2>
        <h4>Another counter: {this.state.counter}</h4>
        <button onClick={this.handleClick}>Don't Click Me!</button>
      </div>
    );
  }
};

export default ClassBased;
