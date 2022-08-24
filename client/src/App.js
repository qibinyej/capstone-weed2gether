import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Resources from "./components/Resources";
import MyPage from "./components/MyPage";
import Articles from "./components/Articles";

function App() {
  const [currentUser, setCurrentUser] = useState(false); // currentUser exist?
  const [user, setUser] = useState({
    username: "",
    posts: [],
    comments: [],
  });
  const [comments, setComments] = useState([]); //current user's comments
  // const [posts, setPosts ] = useState([]) //current user's posts
  const [errors, setErrors] = useState([]);
  const [postData, setPostData] = useState([]); //all posts' details

  const handleAddComment = (comment, post) => {
    setPostData(
      postData.map((item) => {
        if (item.id === post.id) {
          const updatedItem = {
            ...item,
            comments: [...item.comments, comment],
          };
          return updatedItem;
        } else {
          return item;
        }
      })
    );
  };

  //render user posts
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((r) => {
        if (r.username) {
          setUser(r);
          setComments(r.comments);
          setCurrentUser(true);
          // setPosts(r.posts)
        } else {
          r.json().then((data) => setErrors(data.errors));
        }
      });
  }, []);

  const updateUser = () => setCurrentUser(!currentUser);

  //render posts
  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          setPostData(data);
        }
      });
  }, []);

  const handlePosts = () => {
    const posts = postData.filter((post) => post.user.id === user.id);
    return posts;
  };

  // fetch news API
  const [articleArr, setArticles] = useState([]);
  let newsUrl =
    "https://newsapi.org/v2/everything?q=marijuana&apiKey=19762554859c418cb275101d9f469ffc";
  useEffect(() => {
    fetch(newsUrl)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data.articles)
        setArticles(data.articles);
      });
  }, []);

  //fetch NYS law
  const [bills, setBills] = useState([]);
  // let billUrl =
  //   "https://legislation.nysenate.gov/api/3/bills/search?term=%22cannabis%22?key=ugdcx74C59qitKq4KoCTDgLyOtlZoP2p";
  // useEffect(() => {
  //   fetch(billUrl)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       setBills(data.items);
  //     });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar user={user} currentUser={currentUser} />
        <Switch>
          <Route path="/login">
            <Login updateUser={updateUser} setUser={setUser} user={user} />
          </Route>
          <Route path="/MyPage">
            <MyPage
              comments={comments}
              updateUser={updateUser}
              currentUser={currentUser}
              user={user}
              posts={handlePosts}
            />
          </Route>
          <Route path="/signup">
            <Signup updateUser={updateUser} user={user} />
          </Route>
          <Route exact path="/Posts">
            <Posts
              postData={postData}
              comments={comments}
              user={user}
              handleAddComment={handleAddComment}
            />
          </Route>
          <Route path="/Articles">
            <Articles articleArr={articleArr} />
          </Route>
          <Route path="/Resources">
            <Resources user={user} bills={bills} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
