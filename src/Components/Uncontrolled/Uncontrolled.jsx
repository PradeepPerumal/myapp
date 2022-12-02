import React from "react";
import "./Uncontrolled.css";

class Uncontrolled extends React.Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  }

  render() {
    return (
      <div className="form-outer">
        <div className="container main">
          <div className="row mt-5 justify-content-center">
            <div className="col col-md-6">
              <form>
                <div className="row">
                  <h3 className="text-primary">Login Form</h3>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col col-md-6">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="form-control form-control-sm"
                      ref={this.username}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col col-md-6">
                    <input
                      className="form-control form-control-sm"
                      type="password"
                      name="username"
                      placeholder="Password"
                      ref={this.password}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col col-md-6">
                    <button
                      type="submit"
                      onClick={this.submit}
                      className="btn btn-outline-primary"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Uncontrolled;
