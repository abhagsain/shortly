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
import Loading from "./components/Loading";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      input: "",
      error: false,
      loading: false,
      handleSubmit: this.handleSubmit,
      handleInputChange: this.handleInputChange,
      handleEnter: this.handleEnter,
    };
  }

  validateUrl = value => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };
  validateAndGetData = () => {
    const { input } = this.state;
    if (input) {
      if (!this.validateUrl(input)) {
        return this.setState({ error: true });
      } else {
        this.setState({ loading: true });
        this.getShortenedURL();
      }
    } else {
      return this.setState({ error: true });
    }
  };
  getShortenedURL = async () => {
    let { input } = this.state;
    const res = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: input }),
    }).then(res => res.json());
    const { values } = JSON.parse(JSON.stringify(this.state));
    const ID = this.getUniqueID();
    if (input.length >= 65) {
      input = input.substr(0, 65) + "...";
    }
    values.push({ ID, input, output: `https://rel.ink/${res.hashid}` });
    localStorage.setItem("data", JSON.stringify(values));
    this.setState({ values, input: "", loading: false });
  };
  handleSubmit = async () => {
    this.validateAndGetData();
  };

  handleEnter = e => {
    if (e.key === "Enter") {
      this.validateAndGetData();
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
    const { values, loading } = this.state;

    return (
      <GlobalContext.Provider value={this.state}>
        <Navbar />
        <Hero />
        <div className="section-2">
          <Search />
          <div className="container">
            {values.map(value => (
              <URLItem
                input={value.input}
                output={value.output}
                key={value.ID}
              />
            ))}
            {loading && <Loading />}
          </div>
          <Specifications />
        </div>
        <CallToAction />
        <Footer />
      </GlobalContext.Provider>
    );
  }
}
