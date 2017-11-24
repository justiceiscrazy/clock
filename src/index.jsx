import React, { Component, createElement, } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    return (
      <div>hi</div>
    );
  };
}

ReactDOM.render(
  <Clock />,
  document.getElementById('app'),
)
