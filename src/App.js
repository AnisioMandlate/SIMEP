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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/recover" component={Recover} />
            <Route exact path="/recover-password" component={RecoverPassword} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserDetails} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/buildings" component={Building} />
            <Route exact path="/buildings/:id" component={BuildingDetails} />
            <Route exact path="/add-building" component={AddBuilding} />
            <Route exact path="/statistics" component={Statistic} />
            <Route exact path="/notifications" component={Notification} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
