import PostCard from "./PostCard";
import Articles from "./Articles";
import {useEffect, useState} from 'react'

function Posts() {
  
  const [postData, setPostData] = useState([]);
  useEffect (() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          setPostData(data);
        }
      });
  }, [])

  const post = postData.map((post) => {
    return <PostCard key={post.id} post={post} />;
  });

  return (
    <>
      <h1 className="page-title">POSTS</h1>
      <div>{post}</div>
      {/* <Articles />
       */}
    </>
  );
}

export default Posts;
