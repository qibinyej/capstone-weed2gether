import { React, useState } from "react";
import CommentCard from "./CommentCard";
import CommendForm from "./CommentForm";

function Comments() {
  const [comments, setComments] = useState([]);

  const commentCards = comments.map((item) => {
    return <CommentCard key={item.id} comment={item} />;
  });

  const appendComment = (comment) => {
    setComments([...comments, comment])
  }

  return (
    <>
      <section>
        <CommendForm addComment={appendComment} />
        <hr />
        Comments:
        {commentCards}
      </section>
    </>
  );
}

export default Comments;
