// container/container.jsx
import { Route, Routes } from "react-router-dom";
import Users from "./users/users";
import Books from "./books/books";
import Home from "./home";

export default function Container() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/*" element={<Users />} />
      <Route path="/books/*" element={<Books />} />
    </Routes>
  );
}
