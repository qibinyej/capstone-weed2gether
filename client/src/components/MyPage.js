import { React, useEffect, useState } from "react";
import PostForm from "./PostForm";
import Logout from "./Logout";
import UserPost from "./UserPost";


function MyPage({ updateUser, user, updatePost, posts, setPosts }) {
  
  const [errors, setErrors] = useState(false);
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [aPost, setAPost] = useState([]);



  useEffect(() => {
    fetch("/my-posts")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAPost(data);
        setPosts(data)
      });
  }, []);

const handleAddPost = (e)=>{
  setTitle(e.title)
  setPostBody(e.postBody)

}
   

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        post_body: postBody,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data.title);
        // setTitle(data.title)
        // setPostBody(data.postBody)
      });
  };


  const handleDelete = (post) => {
    fetch(`/posts/${post}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log();
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  };



  return (
    <div>
      <h1 className="float-right text-base px-10">
        Weclome back, {user.username}!
      </h1>
      <Logout updateUser={updateUser} />

      <h1 className="mt-4 text-center text-xl font-semibold">Create A Post</h1>

      <PostForm
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setPostBody={setPostBody}
      />
      <div className="all-posts">
        {posts.map((post) => (
            <UserPost
              key={post.id}
              post={post}
              handleDelete={handleDelete}
              updatePost={updatePost}
            />
          
        ))}
      </div>
    </div>
  );
}

export default MyPage;
