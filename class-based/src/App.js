import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

const App = () => {
  const [counter] = React.useState(1);
  const [isLoggedIn] = React.useState(true);

  return (
    <div className="App">
      <h1>Fun with Classes!</h1>
      <Router>
        <Link to="/">Class-Based </Link>
        <Link to="/lifecycle">Lifecyle</Link>

        <Switch>
          <Route path="/lifecycle" component={Lifecycle} />
          <Route path="/">
            <ClassBased counter={counter} isLoggedIn={isLoggedIn}>
              <h4>I am a children</h4>
              <p>More children</p>
            </ClassBased>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
