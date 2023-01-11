import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser, updateUser}) {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [errors, setErrors] = useState([]);

  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("Logged in!");
          updateUser(user)
          setUser(user);
          history("/MyPage");
        });
      } else {
        console.log("failed to log in!");
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
      return res;
    });
  };

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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-grey-800">
              Login to an account
            </h2>
          </div>

          <div className="flex justify-center items-center text-sm">
            Don't have an account?
            <a
              href="/Signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {"Signup"}
            </a>
          </div>

          <form
            onSubmit={(e) => {
              handleLogin(e);
            }}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  username
                </label>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs text-gray-900"
                >
                  Agree to Terms and Conditions
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/Signup"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {"Forgot your password?"}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-600 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
          {errors
            ? errors.map((e, index) => <div key={index}>{e[1]}</div>)
            : <></>}
        </div>
      </div>
    </>
  );
}

export default Login;
