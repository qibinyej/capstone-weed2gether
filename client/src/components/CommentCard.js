import React from 'react'
import Comments from './Comments'


function CommentCard({comment}) {
  return (
    <>
        <h1>Reviews:</h1>
          <div className="reviews-body">
                {comment} 
          </div>
          {/* <div className="text-muted text-bold">
              {timestamp || "3 mins ago"}
          </div> */}
    </>
  )
}

export default CommentCard