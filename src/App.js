import React from 'react';
import axios from "axios";
import { Switch, Route, Redirect, Link, Router } from "react-router-dom";
import { LoginForm } from './Components/Login/Login';
import { Counter } from './features/counter/Counter';
import './App.css';
import { HomePage } from './Components/HomePage/homePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
