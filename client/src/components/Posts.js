import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function Posts({
  user,
  postData,
  handleAddComment,
}) {
  // const initialState = () => Number(window.localStorage.getItem("count") || 0);
  // const [count, setCount] = useState(initialState);

  return (
    <>
      <h1 className="page-title "></h1>
      {postData.map((post) => {
        return (
          <div key={post.id} className="post-group">
            <div className="post-container-home">
              <p className="mt-3 indent-3 uppercase tracking-wide text-base text-indigo-600 font-bold">
                {post.title}
              </p>
              <p className="mt-4 indent-8 text-base">{post.post_body}</p>
              <button
                className="mt-6 bg-white rounded py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 "
                type="button"
                onClick={console.log("upvote")}
              >
                <img
                  id="upvote-icon"
                  src="/muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg"
                />
                {post.upvote}
              </button>
            </div>
            <CommentForm
              post={post}
              user={user}
              handleAddComment={handleAddComment}
            />
            <CommentCard post={post} />
          </div>
        );
      })}ß
    </>
  );
}

export default Posts;
