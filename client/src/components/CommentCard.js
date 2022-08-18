import React from 'react'


function CommentCard({postComment}) {

  return (
      <div>
          <p>{postComment.comment}</p>
      </div>
  )
}

export default CommentCard