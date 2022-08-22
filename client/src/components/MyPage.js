import { React, useState } from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";

function MyPage({ currentUser, user }) {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        post_body: postBody,
        user_id: currentUser.id,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="welcome">Weclome back!</h1>
      {/* <Logout /> */}
      <br />
      <PostForm
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setPostBody={setPostBody}
      />
      <br />
      {user.posts.map((post) => (
        <div className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100">
          <div className="post-container">
            <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Title: {post.title}
            </p>
            <p>{post.post_body}</p>
            <p>Upvote: {post.upvote}</p>
            <button className="mt-1 bg-white border border-black rounded py-1 px-1 text-base font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">delete</button>
          </div>
        </div>
      ))}
    {user.comments.map((comment)=>{ 
        <p key={comment.id}>{comment}</p>
      }
      )}
    </div>
  );
}

export default MyPage;
