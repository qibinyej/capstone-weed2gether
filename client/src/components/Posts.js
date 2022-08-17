import PostCard from './PostCard'
import Articles from './Articles'
import { useState } from 'react'


function Posts({ postData, removePost }) {

  const post = postData.map((post) => {
    return <PostCard key={post.id} post={post} removePost={removePost}/>
  })


  return (
    <>
      <h1 className='page-title'>POSTS</h1>
      <div>
      {post}
      </div>
      
      {/* <Articles />
       */}
    </>
  )
}

export default Posts