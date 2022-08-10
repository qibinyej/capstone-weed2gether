// import { useState, useEffect } from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './components/Login'
import NavBar from './components/NavBar';
import Signup from "./components/Signup";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  // function handleClick(){
  //   fetch('/cookie_click')
  //   .then(r=>r.json())
  //   .then(console.log)
  // }

  return (
    <>
      {/* <NavBar /> */}
      {/* <Login /> */}
      <Signup />

    {/*  <BrowserRouter>
       <div className="App">
         <Switch>
           <Route path="/Login">
             <Login />
           </Route>
           <Route path="/">

           </Route>
      </Switch>
      </div>
    </BrowserRouter> */}

    </>


  );
}


export default App;
