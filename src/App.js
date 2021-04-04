import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Calibrate from './Calibrate';
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/app" component={Calibrate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
