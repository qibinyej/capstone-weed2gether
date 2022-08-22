import { React, useState } from "react";

function CommentForm({ handleComment, addNewComment, newComment }) {
  // const [newComment, setNewComment] = useState("")
  // const handleComment = (e) => setNewComment(e.target.value)
  // const addNewComment = (e) => {
  //   console.log(newComment)
  //   e.preventDefault()
  //   // const new = {
  //   //   newComment,
  //   //   user_id,
  //   //   post_id
  //   // };
  //   fetch('/comments', {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(
  //        comment: newComment,
  //        post_id
  //       )
  //     })
  //   .then(r=>r.json())
  //   .then(data=>appendComment(data))
  // }

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
            onChange={handleComment}
            type="text"
            value={newComment}
            placeholder="enter comment..."
          />
          <button
            className="mt-1 bg-white border border-black rounded py-1 px-1 text-base font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
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
