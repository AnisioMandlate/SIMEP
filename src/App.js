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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/addUser" component={AddUser} />
            <Route exact path="/buildings" component={Building} />
            <Route exact path="/statistics" component={Statistic} />
            <Route exact path="/notifications" component={Notification} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
