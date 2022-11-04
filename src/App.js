import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import Demo1 from './demo/Demo1';
import Demo2 from './demo/Demo2';

const App = () => {

        return (
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/">Top</Link>
              </li>
              <li>
                <Link to="/demo/demo1/">demo1</Link>
              </li>
              <li>
                <Link to="/demo/demo1/1">demo1-1</Link>
              </li>
              <li>
                <Link to="/demo/demo1/2">demo1-2</Link>
              </li>
              <li>
                <Link to="/demo/demo2/">demo2</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/demo/demo1" component={Demo1} />
              <Route exact path="/demo/demo1/:no" component={Demo1} />

              <Route exact path="/demo/demo2" component={Demo2} />
              <Route exact path="/demo/demo2/:no" component={Demo2} />

              <Route>
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        );
}

export default App;

function NotFound() {
  return <h2>Not Found Page</h2>;
}
