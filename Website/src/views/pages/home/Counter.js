import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    days: 7,
    hours: 12,
    minutes: 60,
    seconds: 60,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { days, hours, minutes, seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes > 0) {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        } else if (hours > 0) {
          this.setState(({ hours }) => ({
            hours: hours - 1,
            minutes: 59,
            seconds: 59,
          }));
        } else if (days > 0) {
          this.setState(({ days }) => ({
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          }));
        } else {
          clearInterval(this.myInterval);
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
          <h1>Busted!</h1>
        ) : (
          <h1 style={{fontSize: "50px"}}>
            Time Remaining: {days} days {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    );
  }
}
