import { LockClosedIcon } from '@heroicons/react/solid';
import { useState} from 'react';

function Login({updateUser}) {

  const [username, setUsername] = useState({})
  const [password, setPassword] = useState({})

  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(username, password)
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => {
      if (res.ok) { console.log("Logged in!") }
      else { console.log("failed to log in!") }
      return res
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  }

  return (
    <>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
              className="mx-auto h-21 w-auto"
              src="/marijuana+weed+icon256.png"
              alt="login-icon"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-grey-800">Sign in to an account</h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  username
                </label>
                <input 
                  onChange={(e)=>setUsername(e.target.value)}
                  id="login-username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  {"Forgot your password?"}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
            {/* <div className="flex items-center text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  {"Create an account"}
                </a>
              </div> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Login