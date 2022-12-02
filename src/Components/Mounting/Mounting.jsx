import React from "react";

class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Green",
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return { color: props.color };
  //   }

  render() {
    return (
      <div className="Mounting">
        <div style={{ fontSize: "25px" }}>
          My Favourite color is {this.state.color}
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "Red",
      });
    }, 5000);
  }
}

export default Mounting;
