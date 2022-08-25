// import { comment } from "postcss";
// import { React, useEffect, useState } from "react";
// import CommentForm from "./CommentForm";

// function PostCard({ post, user,addNewComment, newComment, setNewComment, allComments, handleSelectedPost }) {
//   const initialState = () =>
// 

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


//MyPage old code:

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