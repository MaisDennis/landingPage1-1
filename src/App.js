import React from 'react';
import './App.css';
import Home from './pages'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import SignInPage from './pages/signin';
import Policy from './pages/policy';


function App() {
  return (
     <Router>
       <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SignInPage} exact/>
        <Route path="/policy" component={Policy} exact/>
       </Switch>
    </Router >
  );
}

export default App;
