import React, { Component } from 'react';

class NumberList extends Component {
  constructor(props) {
    super(props);

    this.numbers = props.numbers;
  }

  componentDidMount() {
    console.log('NumberList component is mounted!');
  }

  componentWillUnmount() {
  }

  render() {
    const listItems = this.numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );

    return (
        <ul>
          { listItems }
        </ul>
    );
  }
}

export default NumberList;
