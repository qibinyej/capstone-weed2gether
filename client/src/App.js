import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

    function handleClick(){
      fetch('/cookie_click')
      .then(r=>r.json())
      .then(console.log)
    }

  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/testing">
    //         <h1>Test Route</h1>
    //       </Route>
    //       <Route path="/">
    //         <h1>Page Count: {count}</h1>
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <button onClick={handleClick}>click</button>
  );
}


export default App;
