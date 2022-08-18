import React from 'react'


function CommentCard({postComment}) {

  return (
      <div>
          <h4>{postComment.comment}</h4>
      </div>
  )
}

export default CommentCard