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

  componentDidMount() {
    const timer = setInterval(() => {
      this.calculateTimeLeft();
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateTimeLeft() {
    const now = Date.now();
    const difference = new Date("2020-04-25 16:50:00") - now;

    if (difference > 0) {
      this.setState({
        timeLeft: {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        },
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="left" style={{ backgroundImage: `url(${picture})` }}>
          <p> days: {this.state.timeLeft.days} </p>
          <p> hours: {this.state.timeLeft.hours} </p>
          <p> minutes: {this.state.timeLeft.minutes} </p>
          <p> seconds: {this.state.timeLeft.seconds} </p>
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
