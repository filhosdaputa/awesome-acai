import React, { Component } from "react";
import Footer from "../../components/Footer/Footer";
import getSources from "../../api/get-sources";
import categories from "../../data/categories.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      category: "sport",
      sources: []
    };

    this.setStateSources = this.setStateSources.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.setStateSources();
  }

  setStateSources() {
    getSources({ category: this.state.category }).then(data =>
      this.setState({ sources: data.sources, loading: false })
    );
  }

  handleOnChange(ev) {
    this.setState({ category: ev.target.value, loading: true }, () => {
      this.setStateSources();
    });
  }

  render() {
    return (
      <div className="App">
        <h1>awesome-acai</h1>
        <select
          defaultValue={this.state.category}
          onChange={this.handleOnChange}
        >
          {Object.keys(categories).map(key => (
            <option key={key} value={key}>
              {categories[key]}
            </option>
          ))}
        </select>
        <div className={`loading ${this.state.loading ? "" : "hide"}`.trim()}>
          Loading ...
        </div>
        <ul className={`${this.state.loading ? "hide" : ""}`}>
          {this.state.sources.map(source => (
            <li key={source.id}>
              <h2>{source.name}</h2>
              {source.description}
            </li>
          ))}
        </ul>
        <Footer loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
