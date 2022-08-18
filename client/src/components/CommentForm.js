import {React, useState} from 'react'


function CommentForm({ appendComment }) {

  const [comment, setComment] = useState("")
  
  const handleComment = (e) => setComment(e.target.value)
  const addNewComment = (e) => {
    // console.log(newComment)
    e.preventDefault()
    // const newComment = {
    //   comment,
    // };
    fetch('/comments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment
        })
      })
    .then(r=>r.json())
    .then(appendComment)
  }

  return (
    // <div className='form-container'>
      <form action="http://localhost:4000/posts" method="post" onSubmit={addNewComment}>
        <label htmlFor="post_title" className="block text-sm font-sm text-gray-700">
          <textarea
            className='comment-form'
            onChange={handleComment}
            type='text'
            value={comment}
            placeholder="enter comment..." />
            <button className='comment-button' type="submit" >send</button>
        </label>
      </form>
    // </div>
  )
}

export default CommentForm