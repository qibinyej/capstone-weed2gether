import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div className='navbar-links flex flex-no-wrap'>
            <img className='' src='/marijuana+weed+icon128.png' alt='navbar-icon' />
            <ul>
                <li>weed2gether</li>
                <li><Link to='/about'>About</Link></li> 
                <li><Link to='/posts'>Posts</Link></li> 
                <li><Link to='/MyPage'>My Page</Link></li>
                <li><Link to='/Resources'>Resources</Link></li>
                <li className='split'><Link to='/logout'>Logout</Link></li>               
                <li className='split'><Link to='/login'>Login</Link></li>              
                <li className='split'><Link to='/signup'>Signup</Link></li>              
            </ul>
        </div>
    )
}

export default NavBar