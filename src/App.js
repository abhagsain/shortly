import React, { Component } from "react";
import "./sass/index.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CallToAction from "./components/CTA";
import Footer from "./components/Footer";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Search error={false} />
        <CallToAction />
        <Footer />
      </React.Fragment>
    );
  }
}
