import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StravaAuth from '../components/StravaAuth';
import Heading from '../components/Heading';
import User from '../components/User';
import Bikes from '../components/Bikes';
import SingleBike from '../components/SingleBike';
import SingleBikeNew from '../components/SingleBikeNew';
import Signup from '../components/Signup';
import Login from '../components/Login';
import VelocityRegister from '../components/VelocityRegister';

export default (
    <Router>
        <Heading />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user" component={User} />
          <Route exact path="/bikes" component={Bikes} />
          <Route exact path="/signup" component={VelocityRegister} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/bike/:id" component={SingleBikeNew} />
        </Switch>
    </Router>
);

