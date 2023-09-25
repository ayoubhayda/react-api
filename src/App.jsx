import Container from "./components/container/container";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import "./assets/css/app.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container />
      <Footer />
    </BrowserRouter>
  );
}
