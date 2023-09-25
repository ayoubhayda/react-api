// container/books/books.jsx
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";
import Show from "./components/Show";

export default function Books() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </section>
  );
}
