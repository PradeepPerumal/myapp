import React from "react";
import "./Controlled.css";

class Controlled extends React.Component {
  constructor(props) {
    super(props);

    this.inputOnchange = this.inputOnchange.bind(this);
    this.state = {
      username: "",
      password: "",
      isLoginSuccess: false,
      isLoginFail: false,
    };

    this.submit = this.submit.bind(this);
  }

  inputOnchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);

    if (
      this.state.username === "Pradeep" &&
      this.state.password === "12345678"
    ) {
      this.setState({
        isLoginSuccess: true,
        isLoginFail: false,
      });
    } else {
      this.setState({
        isLoginSuccess: false,
        isLoginFail: true,
      });
    }
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
                      autoComplete="username"
                      value={this.state.username}
                      onChange={this.inputOnchange}
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col col-md-6">
                    <input
                      className="form-control form-control-sm"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={this.state.password}
                      onChange={this.inputOnchange}
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
                      Add
                    </button>
                    <LoginStatus
                      isSuccess={this.state.isLoginSuccess}
                      isFail={this.state.isLoginFail}
                    ></LoginStatus>
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

function LoginStatus(props) {
  if (props.isSuccess || props.isFail) {
    return props.isSuccess ? (
      <div>Login Success...</div>
    ) : (
      <div>Login Failed...</div>
    );
  }
}
export default Controlled;
