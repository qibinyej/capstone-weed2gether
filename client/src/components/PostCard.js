import { React, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function PostCard({ post }) {
  const initialState = () =>
    Number(window.localStorage.getItem("count")) || post.upvote;
  // const [count, setCount] = useState(initialState);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("")
  const handleComment = (e) => setNewComment(e.target.value)

  //rendering comments respectively
  const postComment = post.comments.map((comment) => {
    return <CommentCard key={comment.id} postComment={comment} />;
  });

  const appendComment = (comment) => {
    setComments([...comments, comment]);
  };

  const addNewComment = (e) => {
    e.preventDefault()
    fetch('/comments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "comment": newComment
        })
      })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      appendComment(data)})
  }

  // useEffect(() => {
  //   window.localStorage.setItem("count", count);
  // }, [count]);

  return (
    <div className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100">
      <div className="post-container">
        <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Title: {post.title}
        </p>
        <p>{post.post_body}</p>
        <div>
          <button
            className="mt-9 "
            type="button"
            // onClick={() => setCount(count + 1)}
            >
            Upvote: 
          </button>
          {post.upvote}
        </div>
      </div>
      <hr />
      <CommentForm handleComment={handleComment} addNewComment={addNewComment} newComment={newComment}/>
      <div>
        Comments:
        {postComment}
      </div>
    </div>
  );
}

export default PostCard;
