import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Signup({ updateUser }) {

  const [errors, setErrors] = useState([])
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleAddUser = (e) => {
    e.preventDefault()
    fetch('/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(r => {
      if(r.ok) {
        r.json().then(user=> {
          updateUser(user)
          history.push(`/users/${user.id}`)
        })
      }else{
        r.json().then(setErrors(errors))
      }
    }) 
}

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
          className="mx-auto h-20 w-19"
          src="/marijuana+weed+icon256.png"
          alt="login-icon"
        />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
          </div>

          <div className="flex justify-center items-center text-sm">
            Already have an account?
            <a
              href="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {"Login"}
            </a>
          </div>

          <form onSubmit={handleAddUser} className="mt-8 space-y-6" action="#" method="POST">
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input onChange={(e) => setUsername(e.target.value)}
                  id="signup-username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label type="hidden" htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-600 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup