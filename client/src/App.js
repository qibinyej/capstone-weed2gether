// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import Posts from './components/Posts';
import Resources from './components/Resources';
import BgAnimate from "./components/BgAnimate";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <BgAnimate /> section transition image */}
          <Switch>
          <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Posts">
              <Posts />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            
            <Route path="/Resources">
              <Resources />
           </Route>
          </Switch> 
      </BrowserRouter>
    </>
  );
}


export default App;
