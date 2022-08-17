import {React, useState} from 'react'


function CommentForm({ appendComment }) {

  const [comment, setComment] = useState('')
  
  const handleComment = (e) => setComment(e.target.value)
  const addNewComment = (e) => {
    console.log(newComment)
    e.preventDefault()
    const newComment = {
      comment,
    };
    fetch('/comments', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newComment
        })
      })
    .then(r=>r.json())
    .then(appendComment(newComment))
    
  }

  return (
    // <div className='form-container'>
      <form action="http://localhost:4000/posts" method="post" onSubmit={addNewComment}>
        <label htmlFor="post_title" className="block text-sm font-sm text-gray-700">
          <textarea
            className='reviews-form'
            onChange={handleComment}
            type='text'
            value={comment}
            placeholder="enter comment..." />
        </label> 
            <button type="submit">send</button>
      </form>
    // </div>
  )
}

export default CommentForm