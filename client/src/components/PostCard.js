// import { comment } from "postcss";
// import { React, useEffect, useState } from "react";
// import CommentForm from "./CommentForm";

// function PostCard({ post, user,addNewComment, newComment, setNewComment, allComments, handleSelectedPost }) {
//   const initialState = () =>
//     Number(window.localStorage.getItem("count")) || post.upvote;
//   // const [count, setCount] = useState(initialState);

//   return (
//     <div onClick={()=>handleSelectedPost(post)} className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100 bg-cyan-500 shadow-lg shadow-cyan-500/50">
//       <div className="post-container bg-cyan-100 shadow-lg">
//         <p className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
//           Title: {post.title}
//         </p>
//         <p>{post.post_body}</p>
//         <div>
//           <button
//             className="mt-9 float-left bg-white border border-gray-500 rounded py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 "
//             type="button"
//             // onClick={() => setCount(count + 1)}
//           >
//             upvote {post.upvote}
//           </button>
//         </div>
//       </div>
//       <CommentForm post={post} newComment={newComment} setNewComment={setNewComment} addNewComment={addNewComment}/>
//       <div>Comments:{allComments.map(comment=> <div key={comment.id}>{comment.comment}</div>)}</div>
//     </div>
//   );
// }
// export default PostCard;
