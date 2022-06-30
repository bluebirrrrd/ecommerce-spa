import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
