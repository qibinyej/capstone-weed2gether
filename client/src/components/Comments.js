import { React, useState } from 'react'
import CommentCard from './CommentCard'

function Comments() {

  const [comment, setComment] = useState('')

  const handleComment = (e) => {
    console.log(comment)
    e.preventDefault()
    fetch('/comments', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment
      })
    })
      .then(r => r.json())
      .then(data => console.log("commented!"))
  }


  return (
    <div>
      <CommentCard comment={comment}/>
    <div className='form-container'>
      <form onSubmit={handleComment}>
        <label htmlFor="post_title" className="block text-sm font-medium text-gray-500">
          <input
            className='reviews-form'
            onChange={(e) => setComment(e.target.value)}
            type='text'
            value={comment}
            placeholder="enter comment..." /><button type="submit" >send</button>
        </label> 
      </form>
    </div>
  </div>
  )
}

export default Comments