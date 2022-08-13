import {React, useState} from 'react'

function Comments() {

  const [comment, setComment] = useState('')
  
  const handleComment = (e) => {
    e.preventDefault()
    fetch('/comments', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
        comment
      })
    })
    .then(r=>r.json())
    .then(data=>console.log("commented!")) 
  }


  return (
    <form onSubmit={handleComment}>
        <label htmlFor="post_title" className="block text-sm font-medium text-gray-700">
          <textarea 
            onChange={(e)=>setComment(e.target.value)} 
            type='text' 
            placeholder="enter comment..." />
        </label>
        <button id='send-icon'type="submit"><img src='./send-icon.png'/></button>
    </form>
  )
}

export default Comments