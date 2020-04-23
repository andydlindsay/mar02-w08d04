import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // establish socket connections
    // make ajax requests, etc
    console.log('the component is mounted to the DOM');
    const interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      console.log('interval fired');
    }, 1000);
    this.setState({ interval });
  }

  componentDidUpdate() {
    // listen for updates to state/props
    console.log('component updated!');
    if (this.state.counter === 30) {
      alert('you win!! give me your credit card details to play again');
      this.setState({ counter: 9 });
    } 
  }

  componentWillUnmount() {
    // cleanup
    console.log('component is being removed from the DOM');
    clearInterval(this.state.interval);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>Lifecycle!!1!!</h1>
        <h4>Another counter: {this.state.counter}</h4>
        <button onClick={this.handleClick}>Don't Click Me!</button>
      </div>
    );
  }
}

export default Lifecycle;
