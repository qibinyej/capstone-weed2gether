import {React, useEffect, useState} from 'react'



function Test() {

  const [title, setTitle] = useState([])
  const [postBody, setPostBody] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        post_body: postBody,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

//   const timestamp = Date.now();
//  let postTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)


  return (
    <div>
      
    </div>
       
  )
}

// setTimeout(() => {
              //   rerouteHome()
              // }, 1000);
export default Test