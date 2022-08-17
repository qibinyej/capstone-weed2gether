import {React, useEffect, useState} from 'react'
import Comments from './Comments';


function PostCard({ post, removePost }) {

  const initialState = ()=> Number(window.localStorage.getItem('count')) || post.upvote
  const [count, setCount] = useState(initialState)
   
  useEffect(()=> {
    window.localStorage.setItem('count', count)
  }, [count])
     
  return (
    <div className="relative mx-auto px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100" >
      <div className=''>

      <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold" >Title: {post.title}</div>
      <div className="mt-2 text-gray-600">{post.post_body}</div>
      <div>
        <button className='mt-2 text- ' type='button' onClick={()=>setCount(count + 1)}>
        upvote + : {post.upvote + count}
        </button>
      </div>
      </div>
      <div className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
        <button onClick={removePost}>delete</button>
      </div>
      <div >
        <Comments />
      </div>
    </div>
  )
}

export default PostCard