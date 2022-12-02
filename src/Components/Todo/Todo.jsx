import React from "react";
import LoginComponent from "./LoginComponent/LoginComponent";
import WelcomeComponent from "./WelcomeComoponent/WelcomeComponent";
import ListComponent from "./ListComponent/ListComponent";
import ErrorComponent from "./Error Component/Error Component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavigation from "./WithNavigation/WithNavigation";
import WithParams from "./WithParams/WithParams";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";

function TodoComponent() {
  const LoginComponentWithNavigation = WithNavigation(LoginComponent);
  const WelcomeComponentWithParam = WithParams(WelcomeComponent);
  const HeaderComponentWithNavigation = WithNavigation(HeaderComponent);

  return (
    <div className="Todo">
      <Router>
        <HeaderComponentWithNavigation></HeaderComponentWithNavigation>
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />}></Route>
          <Route
            path="/Login"
            element={<LoginComponentWithNavigation />}
          ></Route>
          <Route
            path="/Welcome/:name"
            element={
              <AuthenticatedRoute>
                <WelcomeComponentWithParam />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/List"
            element={
              <AuthenticatedRoute>
                <ListComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default TodoComponent;
