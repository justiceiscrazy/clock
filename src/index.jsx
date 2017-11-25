import React, { Component, createElement, } from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';


function perc (time) {
  const dayMilliseconds = 24 * 60 * 60 * 1000;
  const mHours = time.getHours() * 60 * 60 * 1000;
  const mMinutes = time.getMinutes() * 60 * 1000;;
  const mSeconds = time.getSeconds() * 1000;
  const milliseconds = time.getMilliseconds();

  const totalMillis = mHours + mMinutes + mSeconds + milliseconds;
  return totalMillis / dayMilliseconds * 100;
};

function colorize (percentage) {
  if (percentage < 30) {
    return css.green;
  } else if (percentage < 70) {
    return css.yellow;
  }
  return css.red;
};


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const percDay = perc(this.state.time);
    const color = colorize(percDay);
    return (
      <div>
        <h1>
          Normal time: {this.state.time.toLocaleTimeString()}
        </h1>
        <h1>
          Percentage of the day gone by: <span>
          {perc(this.state.time).toFixed(4)}%
          </span>
        </h1>
      </div>
    );
  };
}

ReactDOM.render(
  <Clock />,
  document.getElementById('app'),
);
