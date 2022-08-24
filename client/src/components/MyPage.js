import { React, useEffect, useState } from "react";
import PostForm from "./PostForm";
import Logout from "./Logout";

function MyPage({ updateUser, user }) {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [errors, setErrors] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/my-posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

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
        console.log(data);
      });
  };

  const handleUpdate = () => {
    fetch('/my-posts', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_body: postBody
      })
    })

  }


  const handleDelete = (post) => {
    // console.log(post);
    fetch(`/posts/${post}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        console.log("deleted a post!");
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  };

  return (
    <div>
      
        <h1 className="welcome float-right text-base px-10">Weclome back, {user.username}!</h1>
        <Logout updateUser={updateUser} />

        <h1 className="mt-4 text-center text-xl font-semibold">Create A Post</h1>
        <PostForm
          handleSubmit={handleSubmit}
          setTitle={setTitle}
          setPostBody={setPostBody}
        />

      <div >
        {posts.map((post) => (
          <div key={post.id} className="post-group"   
          >
            <div className="post-container ">
              <p className="mt-3 indent-3 uppercase tracking-wide text-sm text-indigo-600 font-bold">
                Title: {post.title}
              </p>
              <p className="mt-4 indent-8">{post.post_body}</p>
              <p><img id="upvote-icon" src="/muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg"/>{post.upvote}</p>
              <button
                className="mt-1 float-right bg-white border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                delete
              </button>
            </div>
              <h1 className=" mt-4 text-base bold">Comments:</h1>
              {post.comments.map((comment) => {
                return <div className="indent-8"key={comment.id}>{comment.comment}</div>;
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPage;
