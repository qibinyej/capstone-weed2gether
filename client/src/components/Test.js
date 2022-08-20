import {React, useState} from 'react'



function Test() {
 const [isLogin, setIsLogin] = useState(false)




  return (
    <div>
        <button onClick={()=>setIsLogin(! isLogin)}
        className="mt-2 bg-gray-400 border border-transparent rounded py-1 px-2 flex items-center justify-center text-base font-sm text-black hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
         
           {isLogin ? <h1>log out</h1> : <h1>log in</h1>}
        </button>
    </div>
  )
}

export default Test