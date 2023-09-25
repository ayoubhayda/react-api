import { createContext } from "react";
import { DependencyProvider } from "../../../../context/DependencyContext";
import { useFetchData } from "../../../../services/UsersService";

const api = "http://127.0.0.1:3000/api/v1/books";

export const UsersContext = createContext(null);

import Tbody from "./table-items/Tbody";
import Thead from "./table-items/Thead";
import { Link, Outlet } from "react-router-dom";

export default function List() {
  const { data, error } = useFetchData(api);

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
    <div className="w-4/5 mx-auto">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-xl sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-t mb-0 px-4 py-3 border-0 bg-slate-800 divide-slate-700">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-slate-200">
                    Books
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/books/create"
                    className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    Add new
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-200 table-fixed">
                <Thead />
                <DependencyProvider data={data}>
                  <Tbody />
                </DependencyProvider>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
