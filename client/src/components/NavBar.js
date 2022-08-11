import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar-links'>
            <ul className="active">
                <li>
                    <img className="mx-auto h-8 w-auto" src='/marijuana+weed+icon128.png' alt='navbar-icon' />
                </li>
                <li>
                    <a>weed2gether</a>
                </li>
                <li>
                    <a><Link to='/about'>About</Link></a>
                </li>
                <li>
                   <a><Link to='/posts'>Posts</Link></a>
                </li>
                <li className='split'>
                   <a ><Link to='/login'>Login/Signup</Link></a>
                </li>
                <li>
                    <a><Link to='/Resources'>Resources</Link></a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar