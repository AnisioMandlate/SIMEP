import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Notification from "./components/Notifications/Notification";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/notifications" component={Notification} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
