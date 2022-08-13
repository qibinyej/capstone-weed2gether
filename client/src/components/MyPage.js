import {React, useState} from 'react'

function MyPage({updateUser}) {

  const [title, setTitle] = useState('')
  const [postBody, setPostBody] =useState('')

  const handleSubmit = (e)=> {
    e.preventDefault()
    fetch('/posts', {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        postBody
      })
    })
    .then(r=>r.json())
    .then(data=>console.log('posted!'))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post_title" className="block text-sm font-medium text-gray-700">
          <textarea 
            onChange={(e) => setTitle(e.target.value)} type='text' placeholder="Title" />
        </label>

        <label htmlFor="post_body" className="w-full text-sm font-medium text-gray-700"></label>
        <div className="mt-1">
          <textarea 
            onChange={(e) => setPostBody(e.target.value)}
            id="post_body"
            name="post_body"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Write something..."
           
          />
        </div>
        <button type="submit" value="Submit"
                className="mt-2 w-20px bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">submit</button>
      </form>
    </div>
  )
}

export default MyPage