import React from "react";
import picture from "../Countdown/waterfall.jpg";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
    this.calculateTimeLeft = this.calculateTimeLeft.bind(this);
  }

  componentDidMount() {}
  componentWillUnmount() {
    clearInterval();
  }

  calculateTimeLeft() {
    const now = Date.now();
    const difference = new Date("2020-04-24 16:50:00") - now;
    // let timeLeft = {};

    if (difference > 0) {
      this.setState({
        timeLeft: {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        },
      });
      // timeLeft = {
      //   days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      //   hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      //   minutes: Math.floor((difference / 1000 / 60) % 60),
      //   seconds: Math.floor((difference / 1000) % 60),
      // };
    }

    // console.log("time left:", timeLeft);
    // return timeLeft;
  }
  // let timeMore = calculateTimeLeft()
  render() {
    return (
      <div className="wrapper">
        <div className="left" style={{ backgroundImage: `url(${picture})` }}>
          <p> days: {this.state.timeLeft.days} </p>
          <p> hours: {this.state.timeLeft.days} </p>
          <p> minutes: {this.state.timeLeft.days} </p>
          <p> seconds: {this.state.timeLeft.days} </p>
        </div>
        <div className="right">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

Countdown.defaultProps = {
  title: "Coming soon",
  subtitle: "Stick around to be one of the first",
  theme: "",
};

export default Countdown;
