import React, { Component } from "react";
import "../styles.css";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplay from "./EvenCounterDisplay";
import Button from "../Button/Button";

export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  evenClicksCounter = () => {
    const { count } = this.state;
    return count % 2 === 0 ? count : count - 1;
  };

  render() {
    const { count } = this.state;
    const evenCount = this.evenClicksCounter();

    return (
      <>
        <div className="counter-container">
          <h2>Question 1 & 2:Class Based use of State & Props</h2>
          <div className="button-container">
            <Button
              className="counter_button"
              onClick={this.allClicksCounter}
              title="Class Based Counter"
            />
          </div>
          <div className="internal-container">
            <h4 className="all">
              Normal Count: <CounterDisplayer count={count} />
            </h4>
            <h4 className="even">
              Even Count: <EvenCounterDisplay count={evenCount} />
            </h4>
          </div>
        </div>
      </>
    );
  }
}
