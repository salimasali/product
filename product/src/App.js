
import './App.css';
import Login from './components/Login';
import Register from './components/Register/Register';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from 'react';
import Producttdetails from './components/Producttdetails';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">  
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage /> : <Login setLoginUser={setLoginUser} />
            }
            </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
            </Route>
          <Route path="/register">
            <Register />
            </Route>
            <Route path="/producttdetails">
            <Producttdetails />
            </Route>
          </Switch>
          </Router>

          </div>
         
  );
}

export default App;
