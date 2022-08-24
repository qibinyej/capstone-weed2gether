import React from "react";

function CommentCard({ post }) {
  const comments = post.comments;
  console.log(post)

  return (
    <div className="md:container md:mx-auto px-4">
      <div className="text-base">Comments:</div>  
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment-card border-3 ">
            {comment.comment}
          </div>
        );
      })}
    </div>
  );
}

export default CommentCard;
