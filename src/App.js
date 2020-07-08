import React from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import Curtain from "./components/Curtain";
import picture from "./components/Countdown/waterfall.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: new Date("2020-04-29 16:10:00"),
      newDeadline: "",
      timeLeft: true,
    };
    this.timeCalculator = this.timeCalculator.bind(this);
  }
  timeCalculator() {
    this.setState({
      timeLeft: false,
    });
  }
  render() {
    return (
      <div className="App">
        <main className="App-main">
          {this.state.timeLeft ? (
            <Countdown
              picture={picture}
              parentFunc={this.timeCalculator}
              deadline={this.state.deadline}
              newDeadline={this.state.newDeadline}
            />
          ) : (
            <Curtain />
          )}
        </main>
      </div>
    );
  }
}
export default App;
