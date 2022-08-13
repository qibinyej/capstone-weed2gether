import PostCard from './PostCard'
import Articles from './Articles'
import { useState } from 'react'


function Posts({ postData }) {

  const post = postData.map((post) => {
    return <PostCard key={post.id} post={post} />
  })


  return (
    <>
      <h1 className='page-title'>POSTS</h1>
      {post}
      {/* <Articles />
       */}
    </>


  )
}

export default Posts