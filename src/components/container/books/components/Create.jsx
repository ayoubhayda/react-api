import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const api = "http://127.0.0.1:3000/api/v1/books";

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(api, formData);
      navigate("/books");
    } catch (error) {
      console.error("Error posting book data:", error);
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
            NEW BOOK
          </p>

          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter category"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="sr-only">
              Book Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-slate-700 text-slate-200 p-4 pe-12 text-sm shadow-lg"
              placeholder="Enter price"
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
              to="/books"
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
