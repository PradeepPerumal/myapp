import "../Counter/Counter.css";
import React from "react";
import PropTypes from "prop-types";
import "../Counter/bootstrap.css";

class CounterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      countAll: 0,
    };
    this.incrementAll = this.incrementAll.bind(this);
    this.decrementAll = this.decrementAll.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementAll(value) {
    console.log(value);
    this.setState({
      countAll: this.state.countAll + value,
    });
  }

  decrementAll(value) {
    console.log(value);
    this.setState({
      countAll: this.state.countAll - value,
    });
  }

  reset() {
    this.setState({
      countAll: (this.state.countAll = 0),
    });
  }

  render() {
    return (
      <header className="counterComponent">
        <Counter
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={5}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <Counter
          inc={10}
          incrementAll={this.incrementAll}
          decrementAll={this.decrementAll}
        />
        <div className="counter">{this.state.countAll}</div>
        <button className="incButton" onClick={this.reset}>
          RESET
        </button>
      </header>
    );
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.increment}>
          +{this.props.inc}
        </button>
        <button className="btn btn-primary" onClick={this.decrement}>
          -{this.props.inc}
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.inc,
    });
    this.props.incrementAll(this.props.inc);
  }
  decrement() {
    this.setState({
      count: this.state.count - this.props.inc,
    });
    this.props.decrementAll(this.props.inc);
  }
}

Counter.defaultProps = {
  inc: 1,
};

// Counter.propTypes = {
//   inc: PropTypes.number,
// };

export default CounterComponent;
