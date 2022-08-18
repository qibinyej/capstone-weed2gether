import {React, useState} from 'react'

function CommentForm({ appendComment }) {

  const [newComment, setNewComment] = useState("")
  const handleComment = (e) => setNewComment(e.target.value)
  const addNewComment = (e) => {
    // console.log(newComment)
    e.preventDefault()
    // const new = {
    //   newComment,
    //   user_id,
    //   post_id
    // };
    fetch('/comments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          newComment,
    
        )
      })
    .then(r=>r.json())
    .then(appendComment)
  }

  return (
    // <div className='form-container'>
      <form action="http://localhost:4000/comments" method="post" onSubmit={addNewComment}>
        <label htmlFor="post_title" className="block text-sm font-sm text-gray-700">
          <textarea
            className='comment-form'
            onChange={handleComment}
            type='text'
            value={newComment}
            placeholder="enter comment..." />
            <button className='comment-button' type="submit" >send</button>
        </label>
      </form>
    // </div>
  )
}

export default CommentForm