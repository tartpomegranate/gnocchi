import { Link } from 'react-router-dom';
import googleLogo from '../assets/google-logo.svg';

const SignIn = () => {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="w-full sm:w-2/3 lg:w-1/3">
        <Link
          to="/"
          className="block mb-16 text-5xl font-bold text-center dark:text-white"
        >
          <h1>Gnocchi</h1>
        </Link>

        <form className="px-4 flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="px-2 py-3 mb-4 rounded border-2 text-white border-gray-200 hover:border-gray-300 transition duration-200 dark:bg-gray-800 dark:border-gray-700 focus:outline-gray-400 dark:focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-3 rounded border-2 text-white border-gray-200 hover:border-gray-300 transition duration-200 dark:bg-gray-800 dark:border-gray-700 focus:outline-gray-400 dark:focus:outline-none"
          />

          <Link
            to="#"
            className="py-2 mb-8 self-end text-sky-500 hover:text-sky-600 transition duration-200"
          >
            Forgot your password?
          </Link>

          <button className="p-3 rounded font-bold text-white bg-sky-500 mb-4 hover:bg-sky-600 transition duration-200">
            Sign in
          </button>
          <button className="flex justify-center items-center gap-4 p-1 rounded font-bold text-gray-500 border-2 border-gray-300 hover:shadow-md transition duration-200 dark:bg-gray-50 dark:hover:bg-gray-100">
            <img src={googleLogo} className="w-10" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
