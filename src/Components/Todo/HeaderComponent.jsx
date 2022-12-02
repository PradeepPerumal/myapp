import React from "react";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";

class HeaderComponent extends React.Component {
  render() {
    let loggedIn = Authentication.isUserLoggedIn();
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand">CGS Tech</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {loggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/Welcome/Pradeep"
                    >
                      Home
                    </Link>
                  </li>
                )}
                {loggedIn && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/List">
                      UsersList
                    </Link>
                  </li>
                )}
              </ul>
              <form className="d-flex" role="search">
                {loggedIn && (
                  <Link to="/Login">
                    <button
                      className="btn btn-outline-light"
                      type="submit"
                      onClick={() => Authentication.removeUser()}
                    >
                      Logout
                    </button>
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderComponent;
