import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ScrollToTop from "./components/scrollto_top.jsx";
import About from "./pages/about/about.jsx";
import Projects from "./pages/projects/projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>
);
