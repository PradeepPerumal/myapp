import React from "react";
import "../List/List.css";

class AddData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      designation: "",
    };
    this.inputOnchange = this.inputOnchange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Kavin",
          designation: "Developer",
        },
        {
          id: 2,
          name: "Bala",
          designation: "Software Developer",
        },
        {
          id: 3,
          name: "Raju",
          designation: " UI Developer",
        },
        {
          id: 4,
          name: "Kavi",
          designation: "Java Developer",
        },
      ],
    };
  }

  inputOnchange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    event.preventDefault();
    var newUser = {
      id: this.state.userList.length + 1,
      name: this.state.name,
      designation: this.state.designation,
    };

    this.setState({
      List: this.state.userList.push(newUser),
    });
  }

  render() {
    return (
      <>
        <div className="form-outer">
          <div className="container main">
            <div className="row mt-5 justify-content-center">
              <div className="col col-md-6">
                <form onSubmit={this.submit}>
                  <div className="row">
                    <h3 className="text-primary">Login Form</h3>
                  </div>
                  <div className="row mt-3 justify-content-center">
                    <div className="col col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        className="form-control form-control-sm"
                        value={this.state.name}
                        onChange={this.inputOnchange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 justify-content-center">
                    <div className="col col-md-6">
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={this.state.designation}
                        onChange={this.inputOnchange}
                      />
                    </div>
                  </div>
                  <div className="row mt-3 justify-content-center">
                    <div className="col col-md-6">
                      <button type="submit" className="btn btn-outline-primary">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Table List</h2>

          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default AddData;
