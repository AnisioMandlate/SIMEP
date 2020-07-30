import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Notification from "./components/Notifications/Notification";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/UsersList";
import Building from "./components/Buildings/Building";
import Statistic from "./components/Statistics/Statistic";
import AddUser from "./components/Users/AddUser";
import AddBuilding from "./components/Buildings/AddBuilding";
import UserDetails from "./components/Users/UserDetails";
import BuildingDetails from "./components/Buildings/BuildingDetails";
import Login from "./components/Login/Login";
import Recover from "./components/Login/Recover";
import RecoverPassword from "./components/Login/RecoverPassword";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/recover" component={Recover} />
            <Route exact path="/recover-password" component={RecoverPassword} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/users" component={Users} />
            <ProtectedRoute exact path="/users/:id" component={UserDetails} />
            <ProtectedRoute exact path="/add-user" component={AddUser} />
            <ProtectedRoute exact path="/buildings" component={Building} />
            <ProtectedRoute
              exact
              path="/buildings/:id"
              component={BuildingDetails}
            />
            <ProtectedRoute
              exact
              path="/add-building"
              component={AddBuilding}
            />
            <ProtectedRoute exact path="/statistics" component={Statistic} />
            <ProtectedRoute
              exact
              path="/notifications"
              component={Notification}
            />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
