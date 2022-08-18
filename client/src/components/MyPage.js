import {React, useState} from 'react'
import PostForm from './PostForm'

function MyPage() {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        post_body: postBody,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };
  
  return (
    <div>
      <h1>my page</h1>
      <PostForm handleSubmit={handleSubmit} setTitle={setTitle} setPostBody={setPostBody}/>
    </div>
  )
}

export default MyPage