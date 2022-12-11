import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Go back to the{' '}
        <Link to="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
