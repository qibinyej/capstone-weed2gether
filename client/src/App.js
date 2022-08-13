import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from "./components/Signup";
import NavBar from './components/NavBar';
import About from './components/About';
import Posts from './components/Posts';
import Resources from './components/Resources';
import BgAnimate from "./components/BgAnimate";
import MyPage from "./components/MyPage";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  // console.log(currentUser)
  const [postData, setPostData] = useState([])
  // console.log('state', postData)

  // render existing posts
  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    fetch('/posts')
    .then(r=>r.json())
    .then(data=> setPostData(data))
  }
  const updateUser = () => {
    setCurrentUser(currentUser)
  }

// console.log( 'current', currentUser)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        
          <Switch>
            {/* <Route path='/'>
              <BgAnimate />
            </Route> */}
            <Route path="/login">
              <Login updateUser={updateUser}/>
            </Route>
            <Route path="/signup">
              <Signup updateUser={updateUser}/>
            </Route>
            <Route path="/Posts">
              <Posts postData={postData}/>
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Resources">
              <Resources />
           </Route>
           <Route path="/users/:id">
              <MyPage updateUser={updateUser} />
           </Route>
          </Switch> 
      </BrowserRouter>
    </>
  );
}


export default App;
