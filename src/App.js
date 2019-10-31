import React from "react";
import "./sass/index.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import URLItem from "./components/URLItem";
import CTA from "./components/CTA";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">{<Hero />}</div>
      {/* 
        <div className="section-2">
          <Search error={false} />
        </div>
        <CTA /> */}
    </div>
  );
}
