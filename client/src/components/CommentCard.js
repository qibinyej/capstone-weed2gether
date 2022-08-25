import React from "react";

function CommentCard({ post }) {
  const comments = post.comments;
  console.log(post)

  return (
    <div className="indent-8 md:container md:mx-auto px-4">
      <div className="text-base font-semibold">Comments:</div>  
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="overflow-y-scroll">
            {comment.comment}
          </div>
        );
      })}
    </div>
  );
}

export default CommentCard;
