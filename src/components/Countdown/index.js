import React from "react";
import picture from "../Countdown/waterfall.jpg";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="left" style={{ backgroundImage: `url(${picture})` }}>
          <p>Counter</p>
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
