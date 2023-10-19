import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CarList from './components/CarList';
import CarForm from './components/CarForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/cars" component={CarList} />
        <Route path="/add-car" component={CarForm} />
      </Switch>
    </Router>
  );
}

export default App;
