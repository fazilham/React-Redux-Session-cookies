import React from 'react';
import { Switch } from 'react-router-dom';
import Login from 'app/modules/login/login';
import Home from 'app/modules/home/home';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import { AUTHORITIES } from 'app/config/constants';
import Logout from 'app/modules/login/logout';
const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      {/*<ErrorBoundaryRoute path="/" component={Home} />*/}
      {/*Private routes*/}
      <PrivateRoute path="/" component={Home} hasAnyAuthorities={[AUTHORITIES.USER]} />
    </Switch>
  </div>
);

export default Routes;
