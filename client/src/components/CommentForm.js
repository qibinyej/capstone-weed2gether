import { React, useState } from "react";

function CommentForm({post, user, handleAddComment}) {
  const [newComment, setNewComment] = useState("")
  // const [allComments, setAllComments] = useState(post.comments);
  const [errors, setErrors] = useState([]);

//  const handleNewComment = (newComment)=>setAllComments([...allComments, newComment ])
   const addNewComment = (e) => {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "comment": newComment,
        "post_id": post.id,
        "user_id": user.id
      }),
    }).then((r) =>{
      if (r.ok) {
        r.json().then(data=>handleAddComment(data, post))
      } else {
        r.json().then((data) => setErrors(data.errors));
      }
    });
  };
 
  return (
    <>
      <form
        action="http://localhost:4000/comments"
        method="post"
        onSubmit={addNewComment}
      >
        <label
          htmlFor="post_title"
          className="block text-sm font-sm text-gray-700"
        >
          <textarea
            className="comment-form"
            onChange={(e)=> setNewComment(e.target.value)}
            type="text"
            value={newComment}
            placeholder="enter comment..."
          />
          <button
            className="mt-1 float-right bg-white border border-black rounded py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
            type="submit"
          >
            send
          </button>
        </label>
      </form>
    </>
  );
}

export default CommentForm;
