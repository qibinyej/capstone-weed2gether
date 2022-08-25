import React, { useState } from "react";

function UserPost({ post, handleDelete, updatePost }) {
  const [edit, setEdit] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(post); //a single post of current user

  const onEdit = () => {
    setEdit(true);
  };

  const onSave = () => {
    setEdit(false);
    updatePost(updatedPost);
  };

  //   update/change a User's post
  const handleUpdatedPost = (e) => {
    setUpdatedPost({ ...updatedPost, post_body: e.target.value });
  };

  const comments = post.comments.map((item) => {
    return (
      <div key={item.id} className="ml-10" >
        <p className="mt-1 mr-4 indent-8"> {item.comment}</p>
      </div>
    );
  });

  return (
    <div className="post-group">
      <div className="post-container-userPost ">
        <p className="mt-3 indent-3 uppercase tracking-wide text-base text-indigo-600 font-bold">
          {post.title}
        </p>
        {edit ? (
          <textarea
            onChange={handleUpdatedPost}
            value={updatedPost.post_body}
            className="mx-8 my-4 w-96 border border-gray-400 rounded-lg"
          ></textarea>
        ) : (
          <p className="mt-4 indent-8 text-base overflow-auto hover:overflow-scroll h-32">{post.post_body}</p>
        )}
        <div>
          <img
            id="upvote-icon"
            src="/muffin-with-marijuana-icon-cartoon-style-png-image_1837473.jpeg"
          />
          {post.upvote}
        </div>
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

      <div className="mb-9">
        <div className="overflow-auto hover:overflow-scroll h-32">
          <p className="ml-10 mt-4 indent-8 text-base font-semibold">
            Comments:
          </p>

          {comments}
        </div>

        <button
          className="mr-20 mt-4 float-right w-20 bg-white border border-gray-400 rounded-lg py-1 px-1 text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          onClick={() => {
            handleDelete(post.id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default UserPost;
