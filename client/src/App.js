import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search"
import Saved from "./components/pages/Saved";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from "./components/AppNavbar"
import { Container } from 'reactstrap';
// import BooksList from './components/BooksList'

function App() {

  return (
    <Container>
      <div className="App">
        <AppNavbar />
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={Search} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Container >
  );
}


export default App;
