import Articles from "./Articles";
import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function Posts({
  user,
  postData,
  allComments,
  handleAddComment,
  handlePosts,
  articles
  
}) {
  const initialState = () =>
    Number(window.localStorage.getItem("count"))
  const [count, setCount] = useState(initialState);
  

  return (
    <>
      <h1 className="page-title">POSTS</h1>
      {postData.map((post) => {
        return (
          <div key={post.id}
         
            className=" items-center mt-3 px-6 box-content h-100% w-100% p-4 border-4 border-gray-200 bg-gray-100 shadow-lg"
          >
            <div className="post-container bg-cyan-100 shadow-lg">
            <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Title: {post.title}
            </p>
            <p>{post.post_body}</p>
              <button
                className="absolute float-left bg-white border border-gray-500 rounded py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 "
                type="button"
                // onClick={() => setCount(count + 1)}
              >
                upvote {post.upvote}
              </button>
            </div>
         

            <CommentCard post={post} />
            <CommentForm
              post={post} 
              user={user}
              handleAddComment={handleAddComment}
              />
            
          </div>
        );
      })}
      
      
    </>
  );
}

export default Posts;
