import { useFetchData } from "../../../../services/UsersService";
import { Link, useParams } from "react-router-dom";
const api = "http://localhost/projects/api/v1/users?id=";

export default function Show() {
  const { id } = useParams();
  const { data, error } = useFetchData(api, id);

  if (!data && !error) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-slate-800 py-6 px-6 rounded-3xl w-96 shadow-xl">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-2xl bg-slate-600 left-4 -top-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">{data.name}</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <p>{data.email}</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p>{data.age}</p>
          </div>
          <div className="flex mt-6">
            <Link
              to={`/users/update/${data.id}`}
              className="block btn w-full rounded-lg bg-blue-600 px-5 mr-2 py-3 text-sm font-medium text-white text-center hover:bg-blue-700"
            >
              Edit
            </Link>
            <Link
              to="/users"
              className="block btn w-full rounded-lg bg-red-600 px-5 ml-2 py-3 text-sm font-medium text-white text-center hover:bg-red-700"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
