import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Resources from "./components/Resources";
import MyPage from "./components/MyPage";
import Test from "./components/Test";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [postData, setPostData] = useState([]);
  const [deletePost, setDeletePost] = useState([]);
  const [user, setUser] = useState({
    username:"",
    posts:[],
    comments:[]
  })
  // const [errors, setErrors] = useState([])
  useEffect(() => {
    fetchPosts();
    fetchMe();
  }, []);

  const fetchPosts = () => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          setPostData(data);
        }
      });
  };
  
  const updateUser = (user) => {
    setCurrentUser(user);
  };

  const fetchMe = () => {
    fetch("/me")
      .then((r) => r.json())
      .then((r) => {
        // console.log(r)
        setUser(r)
        updateUser(r);
      });
  };

  const removePost = (post) => {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(handleDeletePost);
  };

  const handleDeletePost = (id) =>
    setDeletePost((current) => current.filter((p) => p.id !== id));


  return (
    <>
      <BrowserRouter>
        <NavBar currentUser={currentUser}/>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/MyPage">
            <MyPage updateUser={updateUser} currentUser={currentUser} user={user} />
          </Route>
          <Route path="/signup">
            <Signup updateUser={updateUser}/>
          </Route>
          <Route exact path="/Posts">
            <Posts postData={postData} removePost={removePost} />
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
