import { React, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function PostCard({ post, removePost }) {
  //upvote
  const initialState = () =>
    Number(window.localStorage.getItem("count")) || post.upvote;
  const [count, setCount] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const postComment = post.comments.map((comment) => {
    return <CommentCard key={comment.id} postComment={comment} />;
  });

  return (
    <div className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100">
      <div className="post-container">
        <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Title: {post.title}
        </p>
        <p>{post.post_body}</p>
        <div>
          <button
            className="mt-2 text- "
            type="button"
            onClick={() => setCount(count + 1)}>
            upvote + : {post.upvote}
          </button>
        </div>
      </div> 
      <button 
      onClick={removePost}
      className="relative bg-blue-300 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded"
      >
      delete
      </button>
      <CommentForm />
    <hr />
      <div>Comments:
        {postComment}
      </div>
    </div>
  );
}

export default PostCard;
