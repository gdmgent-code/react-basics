import React, { Component } from 'react';

class DigitalClock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date(), counter: 0 };
  }

  componentDidMount() {
    console.log('Welcone component is mounted!');

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      counter: (prevState.counter + parseInt(props.increment)),
      date: new Date()
    }));
    
  }

  render() {
    return (
        <div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <p>{this.state.counter}</p>
        </div>
    );
  }
}

export default DigitalClock;
