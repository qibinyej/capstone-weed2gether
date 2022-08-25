import React, { useState } from "react";
function UserPost({ post, handleDelete, updatePost }) {
  const [edit, setEdit] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(post);

  const onEdit = () => {
    setEdit(true);
  };

  const onSave = () => {
    setEdit(false);
    updatePost(updatedPost);
  };

  const handleUpdatePost = (e) => {
    setUpdatedPost({ ...updatedPost, post_body: e.target.value });
  };

  const comments = post.comments.map((item) => {
    return (
      <div>
        <p className="mt-4 indent-8 text-base font-semibold">Comments:</p>
        <p className="mt-1 indent-8"> {item.comment}</p>
      </div>
    );
  });

  return (
    <div className="post-group">
      <div className="post-container ">
        <p className="mt-3 indent-3 uppercase tracking-wide text-base text-indigo-600 font-bold">
          Title: {post.title}
        </p>
        {edit ? (
          <textarea
            onChange={handleUpdatePost}
            value={updatedPost.post_body}
            className="mt-3 border border-gray-400 rounded-lg"
          ></textarea>
        ) : (
          <p className="mt-4 indent-8 text-base">{post.post_body}</p>
        )}
        <button className="inline">
          <img
            id="upvote-icon"
            src="/muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg"
          />
          {post.upvote}
        </button>
        <div>
          {edit ? (
            <div
              onClick={onSave}
              className="float-right bg-white text-black border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              save
            </div>
          ) : (
            <div
              onClick={onEdit}
              className="float-right bg-white text-black border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              edit
            </div>
          )}
        </div>
      </div>

      {comments}

      <button
        className="mt-3 float-none w-20 bg-white border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
        onClick={() => {
          handleDelete(post.id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default UserPost;
