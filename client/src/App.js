import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Resources from "./components/Resources";
import MyPage from "./components/MyPage";
import Articles from "./components/Articles";
import BgAnimate from "./components/BgAnimate";

function App() {
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState(false); // currentUser exist?
  const [user, setUser] = useState({
    username: "",
    posts: [],
    comments: [],
  });
  const [comments, setComments] = useState([]); //current user's comments
  const [postData, setPostData] = useState([]); //all posts' details
  const [posts, setPosts] = useState([]); //user's posts
  const [articleArr, setArticles] = useState([]);
  const [bills, setBills] = useState([]);
  

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
  const updateUser = () => setCurrentUser(!currentUser);
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((r) => {
        if (r.username) {
          console.log(r);
          setUser(r);
          setComments(r.comments);
          setCurrentUser(true);
          setPosts(r.posts);
        } else {
          r.json().then((data) => setErrors(Object.entries(data.errors)));
        }
      });
  }, []);

  function addNewPost(data){
    setPosts([data, ...posts ])
  }

  function addNewPostHome(data){
    setPostData([data, ...postData ])
  }

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

  // const handlePosts = () => {
  //   const posts = postData.filter((post) => post.user.id === user.id);
  //   return posts;
  // };

  //Edit a post
  const updatePost = (post) => {
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setPosts(
          posts.map((item) => {
            if (item.id === post.id) {
              return post;
            } else {
              return item;
            }
          })
        );
      });
  };

  // fetch news API
/*  let newsUrl =
    "https://newsapi.org/v2/everything?q=marijuana&from=2022-08-01&sortBy=publishedAt&apiKey=cd6d486774f847cfba67743ef21b8658";

  useEffect(() => {
    fetch(newsUrl)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data.articles)
        setArticles(data.articles);
      });
  }, []);
*/
  //fetch NYS bills

  let billUrl =
    "https://legislation.nysenate.gov/api/3/bills/search?term=%22marijuana%22&sort=signed:DESC,session:DESC&key=ugdcx74C59qitKq4KoCTDgLyOtlZoP2p";
  useEffect(() => {
    fetch(billUrl)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data.result.items);
        setBills(data.result.items);
      });
  }, []);

  return (
    <>
    <NavBar user={user} currentUser={currentUser} />
    <Routes>
          <Route path="/login" element={<Login updateUser={updateUser} setUser={setUser} user={user} />} />
          <Route path="/MyPage" element={<MyPage
            addNewPostHome={addNewPostHome}
            addNewPost={addNewPost}
              comments={comments}
              updateUser={updateUser}
              currentUser={currentUser}
              user={user}
              // posts={handlePosts}
              updatePost={updatePost}
              posts={posts}
              setPosts={setPosts}
            />} />       
          <Route path="/signup" element={<Signup updateUser={updateUser} user={user} currentUser={currentUser}/>} />
          <Route exact path="/Posts" element={<Posts
            postData={postData}
            comments={comments}
            user={user}
            handleAddComment={handleAddComment}
            posts={posts}
          />} />
          <Route path="/Articles" element={<Articles articleArr={articleArr} />} />
          <Route path="/Resources" element={<Resources user={user} bills={bills} />} />
        </Routes>    
    </>
  );
}

export default App;
