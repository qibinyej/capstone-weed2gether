import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Resources from "./components/Resources";
import MyPage from "./components/MyPage";

function App() {
  const [currentUser, setCurrentUser] = useState(false); // currentUser exist?
  const [user, setUser] = useState(
    {"username":"",
    "posts":[],
    "comments":[]}
  ) // render current user posts and comments
  const [comments, setComments] = useState([])
  const [posts, setPosts ] = useState([])
  const [errors, setErrors] = useState([]) 

  const updateUser = () => 
    setCurrentUser(!currentUser);

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json())
    .then((r) => {
      if (r.username) {
        setUser(r)
        setComments(r.comments)
        setCurrentUser(true)
        setPosts(r.posts)
      } else {
        r.json().then(data=>setErrors(data.errors))
      }
    });
  }, []);


//  const deletePost = (id) =>
//   setPosts((current) => current.filter((p) => p.id !== id));

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} currentUser={currentUser}/>
        <Switch>
          <Route path="/login">
            <Login updateUser={updateUser} setUser={setUser} />
          </Route>
          <Route path="/MyPage">
            <MyPage comments={comments} updateUser={updateUser} currentUser={currentUser} user={user} posts={posts}/>
          </Route>
          <Route path="/signup">
            <Signup updateUser={updateUser}/>
          </Route>
          <Route exact path="/Posts">
            <Posts comments={comments} />
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
