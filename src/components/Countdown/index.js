import React from "react";
import picture from "../Countdown/waterfall.jpg";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.calculateTimeLeft = this.calculateTimeLeft.bind(this);
  }

  calculateTimeLeft() {
    const now = Date.now();
    const difference = new Date("2020-04-24") - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    console.log("time left:", timeLeft);
    return timeLeft;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="left" style={{ backgroundImage: `url(${picture})` }}>
          <p onClick={this.calculateTimeLeft}> CLICK </p>
        </div>
        <div className="right">
          <h2>Coming soon</h2>
          <p>Stick around to be one of the first</p>
        </div>
      </div>
    );
  }
}

export default Countdown;
