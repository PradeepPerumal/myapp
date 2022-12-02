import React from "react";
import "../Css/Todo.css";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      designation: "",
    };

    this.state = {
      userList: [
        {
          id: 1,
          name: "Pradeep",
          designation: "Full Stack Developer",
          status: true,
          date: new Date(),
        },
        {
          id: 2,
          name: "Naveen",
          designation: "Java Developer",
          status: true,
          date: new Date(),
        },
        {
          id: 3,
          name: "Karthik",
          designation: "UI Developer",
          status: false,
          date: new Date(),
        },
        {
          id: 4,
          name: "Priya",
          designation: "Automation Testing",
          status: false,
          date: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <table className="table table-striped mt-3">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>{user.date.toString()}</td>
                  <td>{user.status.toString()}</td>
                  <td>
                    <button className="btn btn-sm btn-success">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListComponent;
