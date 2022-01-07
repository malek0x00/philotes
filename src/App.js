import './App.css';
import * as React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Login from './login';
import LoginPage from './loginpage';
import Signup from './signup';
import Home from './homePage';
import UserPage from './userPage';



function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/loginpage" component={LoginPage}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/userpage" component={UserPage}/>
      </Switch>
    </BrowserRouter>
    
   
  );
}
export default App;

