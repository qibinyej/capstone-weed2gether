import React from 'react'

function Logout() {

    const handleLogout = (e)=> {
        e.preventDefault()
        fetch('/logout',{
          method: 'DELETE',
          headers:{ 'Content-Type': 'application/json'},
          })
        //   .then(res => {
        //     if (res.ok) { console.log("Logged out!") }
        //     else { console.log("Log out failed... Try again... Bazinga!") }
        //     return res
        // })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
      }

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout