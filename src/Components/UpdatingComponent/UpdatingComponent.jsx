import React from "react";
import "../Controlled/Controlled.css";

class UpdatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Green",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       color: props.favColor,
  //     };
  //   }

  changeColor() {
    this.setState({
      color: "Red",
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className="updatingComponent">
        <div style={{ fontSize: "25px" }}>
          My favourite color is {this.state.color}
        </div>
        <button
          className="btn btn-primary btn-large"
          type="submit"
          onClick={this.changeColor}
        >
          Change Color
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.color);
    return null;
  }
  componentDidUpdate() {
    console.log(this.state.color);
  }
}

export default UpdatingComponent;
