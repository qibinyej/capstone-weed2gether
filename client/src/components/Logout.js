import React from 'react'

function Logout() {

    const handleLogout = (e)=> {
        e.preventDefault()
        fetch('/logout',{
          method: 'DELETE',
          headers:{ 'Content-Type': 'application/json'},
          })
          .then(res => {
            if (res.ok) { console.log("Logged out!") }
            else { console.log("Log out failed... Try again... Bazinga!") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      }

  return (
    <div>
        <button 
        onClick={handleLogout}
        className="mt-2 bg-gray-400 border border-transparent rounded py-1 px-2 flex items-center justify-center text-base font-sm text-black hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
          Logout
        </button>
    </div>
  )
}

export default Logout