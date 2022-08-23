import { React, useEffect, useState } from "react";
import CommentForm from "./CommentForm";

function PostCard({ post }) {
  const initialState = () =>
    Number(window.localStorage.getItem("count")) || post.upvote;
  // const [count, setCount] = useState(initialState);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const handleComment = (e) => setNewComment(e.target.value);
  const [errors, setErrors] = useState([]);

  //rendering comments
  const postComment = post.comments.map((comment) => {
    return <div>{comment.comment}</div>;
  });

  //append new comments
  const appendComment = (comment) => {
    setComments([...comments, comment]);
  };

  const addNewComment = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // comment: newComment,
      }),
    }).then((r) => {
      if (r.ok) {
        console.log(r);
        appendComment(r);
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  };

  // useEffect(() => {
  //   window.localStorage.setItem("count", count);
  // }, [count]);

  return (
    <div className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100 bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="post-container bg-cyan-100 shadow-lg">
        <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Title: {post.title}
        </p>
        <p>{post.post_body}</p>
        <div>
          <button
            className="mt-9 float-left bg-white border border-gray-500 rounded py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 "
            type="button"
            // onClick={() => setCount(count + 1)}
          >
            upvote {post.upvote}
          </button>
        </div>
      </div>
      <CommentForm handleComment={handleComment} />
      <div>
        Comments:
        {postComment}
      </div>
    </div>
  );
}

export default PostCard;
