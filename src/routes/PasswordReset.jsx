import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeft } from 'phosphor-react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const passwordResetButtonRef = useRef();

  useEffect(() => {
    if (email) {
      passwordResetButtonRef.current.disabled = false;
    } else {
      passwordResetButtonRef.current.disabled = true;
    }
  }, [email]);

  return (
    <div className="h-screen flex justify-center items-center dark:bg-gray-900">
      <div className="w-full sm:w-2/3 lg:w-1/3">
        <Link
          to="/"
          className="flex items-center w-fit m-auto gap-1 text-xs p-2 mb-2 rounded-lg cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-300  transition duration-200 dark:text-white"
        >
          <ArrowLeft size={20} className=" rounded-full " />
          <p>Go back to note taking</p>
        </Link>

        <h1
          to="/"
          className="block mb-16 text-5xl font-bold text-center dark:text-white"
        >
          Gnocchi
        </h1>

        <form className="px-4 flex flex-col">
          <label htmlFor="email" className="dark:text-white pl-1 pb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="px-2 py-3 mb-4 rounded border-2 text-white border-gray-200 hover:border-gray-300 transition duration-200 dark:bg-gray-800 dark:border-gray-700 focus:outline-gray-400 dark:focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="p-3 rounded font-bold text-white bg-sky-500 mb-4 enabled:hover:bg-sky-600 transition duration-200 disabled:cursor-not-allowed disabled:opacity-60"
            ref={passwordResetButtonRef}
            disabled={true}
          >
            Send password reset email
          </button>
        </form>
        <p className="py-4 dark:text-white text-center">
          Actually remember your password?{' '}
          <Link
            to="/signin"
            className="text-sky-500 hover:text-sky-600 hover:underline transition duration-200"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordReset;
