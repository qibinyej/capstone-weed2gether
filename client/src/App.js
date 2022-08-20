import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import NavBar from './components/NavBar'
import Posts from './components/Posts';
import Resources from './components/Resources';
import MyPage from "./components/MyPage";
import Test from './components/Test';

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [postData, setPostData] = useState([])
  const [deletePost, setDeletePost] = useState([])
  // const [errors, setErrors] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    fetch('/posts')
    .then(r=>r.json())
    .then(data=>setPostData(data))
  }

  const removePost = (id) => {
    fetch(`/posts/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
    })
    .then(r=>r.json())
    .then(handleDeletePost)
  }
  const handleDeletePost = (id) => setDeletePost((current)=> current.filter(p => p.id !== id))

  // // not sure what's for...
  // const updateUser = () => {
  //   setCurrentUser(currentUser)
  // }
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Switch>
          <Route path='/test'>
              <Test />
            </Route>
            <Route path='/logout'>
              <Logout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/MyPage" component={MyPage}>
              <MyPage />
           </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/Posts">
              <Posts postData={postData} removePost={removePost}/>
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
