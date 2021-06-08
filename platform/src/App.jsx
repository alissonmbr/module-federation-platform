import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bundle/615/user">User</Link>
      </li>
      <li>
        <Link to="/bundle/615/user/register">User Register</Link>
      </li>
    </ul>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
