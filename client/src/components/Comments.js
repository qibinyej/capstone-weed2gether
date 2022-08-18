import { React, useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommendForm from "./CommentForm";

function Comments() {
  const [comments, setComments] = useState([]);
// console.log(comments)
  useEffect(()=> {
    fetch('/comments')
    .then(r=>r.json())
    .then(setComments)
  }, [])

  const comment = comments.map((item) => {
    return <CommentCard key={item.id} commentCard={item} />;
  });

  const appendComment = (comment) => {
    setComments([...comments, comment])
  }

  return (
    <>
      <section>
        <CommendForm appendComment={appendComment} />
        <hr />
        <h1>Comments:</h1>
        <p className="p-comment">{comment}</p>
      </section>
    </>
  );
}

export default Comments;
