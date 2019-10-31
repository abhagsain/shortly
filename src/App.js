import React from "react";
import "./sass/index.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
      </div>
    </div>
  );
}
