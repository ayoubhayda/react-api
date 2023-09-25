// container/container.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8">
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
              <p className="text-xl font-semibold my-2">Users Management</p>
              <div className="flex mt-6">
                <Link
                  to="/users"
                  className="block btn w-2/5 rounded-lg bg-blue-600 px-5 ml-2 py-3 text-sm font-medium text-white text-center hover:bg-blue-800"
                >
                  Go
                </Link>
              </div>
            </div>
          </div>

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
              <p className="text-xl font-semibold my-2">Books Management</p>
              <div className="flex mt-6">
                <Link
                  to="/books"
                  className="block btn w-2/5 rounded-lg bg-blue-600 px-5 ml-2 py-3 text-sm font-medium text-white text-center hover:bg-blue-800"
                >
                  Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
