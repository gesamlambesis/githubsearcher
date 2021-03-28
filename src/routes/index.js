import React from "react";
import { menuRoutes } from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

const Routes = () => {
  return (
    <Router basename="/githubsearcher">
      <Route>
          <Switch>
            {menuRoutes.map(({ path, exact, component: Component }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={(renderProps) => <Component {...renderProps} />}
              />
            ))}
          </Switch>        
      </Route>
    </Router>
  );
};

export default Routes;
