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
    this.counterInterval = setInterval(() => {
      console.log("MOUNT");
      this.calculateTimeLeft();
    }, 100);
  }
  componentWillUnmount() {
    console.log("unmount!");
    clearInterval(this.counterInterval);
  }

  calculateTimeLeft() {
    const now = Date.now();
    const difference = new Date("2020-04-25 23:10:00") - now;

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
        <div
          className="left"
          style={
            this.props.theme === "dark"
              ? { color: "white", backgroundColor: "black" }
              : { color: "black", backgroundColor: "pink" }
          }
          // { backgroundImage: `url(${picture})` }
        >
          <p>
            <span>{this.state.timeLeft.days} </span>
            days
          </p>
          <p>
            <span>{this.state.timeLeft.hours} </span> hours
          </p>
          <p>
            <span>{this.state.timeLeft.minutes} </span>minutes
          </p>
          <p>
            <span> {this.state.timeLeft.seconds} </span>
            seconds
          </p>
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
  theme: "dark",
};

export default Countdown;
