import React from 'react'
import { useHistory} from 'react-router-dom'

function Logout({updateUser}) {
  const history = useHistory()

    const handleLogout = (e)=> {
        e.preventDefault()
        fetch('/logout',{
          method: 'DELETE',
          headers:{ 'Content-Type': 'application/json'},
          })
          .then(res => {
            if (res.ok) { 
              console.log("Logged out!") 
              updateUser(res)
              history.push('/posts')
              }
            else {res.json().then(console.log("Try again... "))}  
        })
      }

  return (
    <div>
        <button 
        onClick={handleLogout}
        className="mt-1 bg-white border border-black rounded py-1 px-1 flex items-center justify-center text-base font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
          log out
        </button>
    </div>
  )
}

export default Logout