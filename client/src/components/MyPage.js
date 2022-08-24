import { React, useEffect, useState } from "react";
import PostForm from "./PostForm";
import Logout from "./Logout";

import UserPost from "./UserPost";

function MyPage({ updateUser, user, updatePost, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [errors, setErrors] = useState(false);
  const [aPost, setAPost] = useState([]);

  useEffect(() => {
    fetch("/my-posts")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setAPost(data);
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

  const handleDelete = (post) => {
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
      <h1 className="welcome float-right text-base px-10">
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
          <>
            <UserPost
              key={post.id}
              post={post}
              handleDelete={handleDelete}
              updatePost={updatePost}
              aPost={aPost}
            />
          </>
        ))}
      </div>
    </div>
  );

  {
    /* {aPost.comments.map((comment) => {
        return (
          <div className="indent-8" key={comment.id}>
            {comment.comment}
          </div>
        );
      })} */
  }

  {
    /* {aPost.map((post) => {
       return <CommentCard key={post.id} post={post}/>;
      })} */
  }

  {
    /* <h1 className=" mt-4 text-base bold">Comments:</h1>
      {aPost.comments.map((comment) => {
        return (
          <div className="indent-8" key={comment.id}>
            {comment.comment}
          </div>
        );
      })}
      {/* <div className="hidden"> */
  }
  {
    /* <UpdatePost onePost={onePost}/>
          </div> */
  }
}
// <div key={post.id} className="post-group"
// >
//   <div className="post-container ">
//     <p className="mt-3 indent-3 uppercase tracking-wide text-sm text-indigo-600 font-bold">
//       Title: {post.title}
//     </p>
//     {
//       (post.id===onePost.id)?
//       <textarea onChange={handleChangeText}>{onePost.post_body}</textarea>:
//     <p className="mt-4 indent-8">{post.post_body}</p>
//     }
//     <p><img id="upvote-icon" src="/muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg"/>{post.upvote}</p>

//     <div onClick={()=>{
//       setOnePost(post)
//     }}
//       className="float-right bg-white text-black border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
//       edit
//     </div>

//   </div>
//     <h1 className=" mt-4 text-base bold">Comments:</h1>
//     {post.comments.map((comment) => {
//       return <div className="indent-8"key={comment.id}>{comment.comment}</div>;
//     })}
//     <button
//       className="mt-1 float-right bg-white border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
//       onClick={() => {
//         handleDelete(post.id);
//       }}
//     >
//       delete
//     </button>
// </div>

export default MyPage;
