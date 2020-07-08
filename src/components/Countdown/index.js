import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        deadline: this.props.deadline,
      },
    };
    this.calculateTimeLeft = this.calculateTimeLeft.bind(this);
  }

  componentDidMount() {
    this.counterInterval = setInterval(() => {
      console.log("MOUNT");
      this.calculateTimeLeft(this.state.deadline);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.counterInterval);
    console.log("unmount!");
  }

  calculateTimeLeft() {
    const now = Date.now();
    const timeDifference = this.props.deadline - now;

    if (timeDifference > 0) {
      this.setState({
        timeLeft: {
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / 1000 / 60) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        },
      });
    } else {
      this.props.parentFunc();
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div
          className="left"
          style={
            this.props.picture
              ? {
                  backgroundImage: `url(${this.props.picture})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : this.props.theme === "dark"
              ? { color: "white", backgroundColor: "black" }
              : { color: "black", backgroundColor: "pink" }
          }
        >
          <div className="userInput">
            <h4>Please enter the date </h4>
            <p>Currently counting to: </p>
            <form>
              <input
                style={
                  this.props.theme === "dark"
                    ? { color: "black" }
                    : { color: "white" }
                }
                type="text"
                onChange={(event) =>
                  this.setState({ newDeadline: event.target.value })
                }
              ></input>
              <button onClick={() => this.changeDeadline()}>Submit</button>
            </form>
          </div>
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
