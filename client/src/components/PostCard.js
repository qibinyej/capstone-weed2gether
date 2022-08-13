import {React, useState} from 'react'
import Comments from './Comments';


function PostCard({ post }) {
  
  const [count, setCount] = useState(post.upvote)  
    // console.log('upvote', count)
    let upvote = post.upvote

    //persist count and update backend NOT WORKING
  const handleCount = ()=> {
    fetch(`/posts/${post.upvote}`,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify()
      .then(r=>r.json())
      .then(setCount(count +1 ))
    })
}
  
    
  return (

    <div className='card-container'>
      <div>{post.title}</div>
      <div>{post.post_body}</div>
      <div>
        <button type='button' onClick={handleCount}>
          <img id='upvote-icon' src='./muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg' />
        </button>
        {count}
      </div>


      <div>
        <Comments />
      </div>
    </div>
  )
}

export default PostCard