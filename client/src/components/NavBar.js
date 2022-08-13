import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    // const handleLogout = (user)=> {
    //     fetch(`/logout/${user.id}`,{
    //       method: 'DELETE',
    //       headers:{ 'Content-Type': 'application/json'},
    //       })
    //       .then(res => {
    //         if (res.ok) { console.log("Logged out!") }
    //         else { console.log("cannot log out...s") }
    //         return res
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    //   }

    return (
        <div className='navbar-links'>
            <ul className="active">
                <li>
                    <img className="mx-auto h-8 w-auto" src='/marijuana+weed+icon128.png' alt='navbar-icon' />
                </li>
                <li id='weed2'>weed2gether
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                   <Link to='/posts'>Posts</Link>
                </li>
                <li className='split'>
                   <Link to='/login'>Login</Link>
                </li>
                <li className='split'>
                   <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/Resources'>Resources</Link>
                </li>
                <li>
                    <Link to='/MyPage'>My Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar