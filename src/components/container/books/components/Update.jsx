import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFetchData } from "../../../../services/UsersService";
import { useParams } from "react-router-dom";
const api = "http://127.0.0.1:3000/api/v1/books/";

export default function Update() {
  const { id } = useParams();
  const { data, error } = useFetchData(api, id);
  const navigate = useNavigate();

  // Initialize formData with optional chaining
  const initialFormData = {
    title: data?.title || "",
    author: data?.author || "",
    category: data?.category || "",
    price: data?.price || null,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (data) {
      // Set formData when data is available
      setFormData({
        title: data.title || "",
        author: data.author || "",
        category: data.category || "",
        price: data.price || null,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(api + id, formData);
      navigate(`/books/show/${id}`);
    } catch (error) {
      console.error("Error updating book data:", error);
    }
  };

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
    <div className="mx-auto w-4/5 py-10 px-8">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="mb-0 space-y-4 bg-slate-800 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8"
        >
          <p className="text-left text-slate-400 text-lg font-medium mb-5">
            UPDATE BOOK
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
              Save
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
