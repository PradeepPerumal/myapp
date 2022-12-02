class Authentication {
  setLoggedUser(username) {
    sessionStorage.setItem("AuthenticatedUser", username);
  }

  getLoggedUser() {
    let username = sessionStorage.getItem("AuthenticatedUser");
    return username;
  }

  removeUser() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedIn() {
    let user = this.getLoggedUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}

export default new Authentication();
