import React from "react";

function CommentCard({ post }) {
  const comments = post.comments;

  return (
    <div className="relative mt-5 px-4 box-content h-100% w-100% p-4 border-2 border-gray-200 bg-gray-100 shadow-lg">
      {comments.map((comment) => {
        return <p key={comment.id}>{comment.comment}</p>;
      })}
    </div>
  );
}

export default CommentCard;
