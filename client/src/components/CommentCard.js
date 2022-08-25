import React from "react";

function CommentCard({ post }) {
  const comments = post.comments;
  // console.log(post)

  return (
    <div className="indent-12 mt-4 mb-10 md:container md:mx-auto px-4">
      <div className="text-base font-semibold">Comments:</div>  
      <div className="overflow-auto hover:overflow-scroll h-32">

      {comments.map((comment) => {
        return (
          <div key={comment.id} className="w-4/5 m-0 ml-20 p-0.5 justify-items-center border border-gray-200 rounded-lg overflow-y-scroll">
            {comment.comment}
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default CommentCard;
