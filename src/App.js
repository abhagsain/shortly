import React, { Component } from "react";
import "./sass/index.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CallToAction from "./components/CTA";
import Footer from "./components/Footer";
import Specifications from "./components/Specifications";
import URLItem from "./components/URLItem";
import GlobalContext from "./components/GlobalContext";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      input: "",
      error: false,
      loading: true,
      handleSubmit: this.handleSubmit,
      handleInputChange: this.handleInputChange,
    };
  }

  validateUrl = value => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };
  getShortenedURL = async () => {
    const { input } = this.state;
    const res = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: input }),
    }).then(res => res.json());
    const { values } = JSON.parse(JSON.stringify(this.state));
    const ID = this.getUniqueID();
    values.push({ ID, input, output: `https://rel.ink/${res.hashid}` });
    localStorage.setItem("data", JSON.stringify(values));
    this.setState({ values, input: "" });
  };
  handleSubmit = async () => {
    const { input } = this.state;
    if (input) {
      if (!this.validateUrl(input)) {
        return this.setState({ error: true });
      } else {
        this.getShortenedURL();
      }
    } else {
      return this.setState({ error: true });
    }
  };
  handleInputChange = ({ input, error }) => {
    this.setState({ input, error });
  };
  async componentDidMount() {
    const values = JSON.parse(localStorage.getItem("data")) || [];
    if (values.length > 0) {
      this.setState({ values });
    }
  }
  getUniqueID = function() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  render() {
    const { values } = this.state;

    return (
      <GlobalContext.Provider value={this.state}>
        <Navbar />
        <Hero />
        <div className="section-2">
          <Search />
          {values.map(value => (
            <URLItem input={value.input} output={value.output} key={value.ID} />
          ))}
          <Specifications />
        </div>
        <CallToAction />
        <Footer />
      </GlobalContext.Provider>
    );
  }
}
