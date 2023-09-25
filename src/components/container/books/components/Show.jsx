import { useFetchData } from "../../../../services/UsersService";
import { Link, useParams } from "react-router-dom";
const api = "http://127.0.0.1:3000/api/v1/books/";

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
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold my-2">{data.title}</p>
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
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p>{data.author}</p>
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
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>

            <p>{data.category}</p>
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
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>$ {data.price}</p>
          </div>
          <div className="flex mt-6">
            <Link
              to={`/books/update/${data.id}`}
              className="block btn w-full rounded-lg bg-blue-600 px-5 mr-2 py-3 text-sm font-medium text-white text-center hover:bg-blue-700"
            >
              Edit
            </Link>
            <Link
              to="/books"
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
