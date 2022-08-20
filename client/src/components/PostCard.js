import { React, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function PostCard({ post, removePost }) {
  
  const initialState = () => Number(window.localStorage.getItem("count")) || post.upvote;
  const [count, setCount] = useState(initialState);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  //rendering comments in resepct of posts
  const postComment = post.comments.map((comment) => {
    return <CommentCard key={comment.id} postComment={comment} />;
  });

  //comment form
    const appendComment = (comment) => {
      setComments([...comments, comment])
    }

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
            onClick={() => setCount(count + 1)}>
            Upvote: {post.upvote}
          </button>
        </div>
      </div> 
      {/* <button 
      onClick={removePost}
      className="relative bg-gray-200 hover:bg-blue-500 text-black py-1 px-1 rounded"
      >
      delete
      </button> */}
      <hr />
      <CommentForm appendComment={appendComment}/>
      <div>Comments:
        {postComment}
      </div>
    </div>
  );
}

export default PostCard;
