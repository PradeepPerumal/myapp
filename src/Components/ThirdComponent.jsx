import React from "react";

class ThirdComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="thirdComponent">Third Component 1</div>
        <div className="thirdComponent">Third Component 2</div>
      </div>
    );
  }
}

export class FourthComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="fourthComponent">Fourth Component 1</div>
        <div className="fourthComponent">Fourth Component 2</div>
      </div>
    );
  }
}

export class FifthComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="fifthComponent">Fifth Component 1</div>
        <div className="fifthComponent">Fifth Component 2</div>
      </div>
    );
  }
}

export default ThirdComponent;
