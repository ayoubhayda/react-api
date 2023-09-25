import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const api = "http://localhost/projects/api/v1/users";

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(api, formData);
      navigate("/users");
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };

  return (
    <div className="mx-auto w-4/5 py-10 px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="mb-0 space-y-4 bg-slate-800 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8"
        >
          <p className="text-left text-slate-400 text-lg font-medium mb-5">
            NEW USER
          </p>

          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="sr-only">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter age"
              required
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="block w-full rounded-lg bg-blue-600 px-5 mr-2 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Submit
            </button>
            <Link
              to="/users"
              className="block btn w-full rounded-lg bg-red-600 px-5 ml-2 py-3 text-sm font-medium text-white text-center hover:bg-red-700"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
