import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return <>{this.props.count}</>;
  }
}
