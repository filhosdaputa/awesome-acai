import React, { Component } from 'react';
import getSources from '../../api/get-sources';
import categories from '../../data/categories.json';
import getArticles from '../../api/get-articles';
import './App.css';

const initialState = {
  loading: false,
  category: 'technology',
  sources: [],
  source: '',
  apiKey: 'b323242c1fea49f9b6696b3ea1a51fbb',
  articles: []
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.setStateSources = this.setStateSources.bind(this);
    this.handleOnCategoryChange = this.handleOnCategoryChange.bind(this);
    this.handleOnSourceChange = this.handleOnSourceChange.bind(this);
    this.setStateArticles = this.setStateArticles.bind(this);
  }

  componentDidMount() {
    this.setStateSources();
  }

  setStateSources() {
    this.setState({ loading: true });
    getSources({ category: this.state.category }).then(data =>
      this.setState({ sources: data.sources, loading: false })
    );
  }

  setStateArticles() {
    this.setState({ loading: true });
    getArticles({
      source: this.state.source,
      apiKey: this.state.apiKey
    }).then(data => this.setState({ articles: data.articles, loading: false }));
  }

  handleOnCategoryChange(ev) {
    const state = Object.assign({}, initialState, {
      category: ev.target.value
    });
    this.setState(state, () => {
      this.setStateSources();
    });
  }

  handleOnSourceChange(ev) {
    this.setState({ source: ev.target.value }, () => {
      this.setStateArticles();
    });
  }

  render() {
    return (
      <div className="App">
        <h1>awesome-acai</h1>
        <div className="nav">
          <select
            defaultValue={this.state.category}
            onChange={this.handleOnCategoryChange}
          >
            {Object.keys(categories).map(key => (
              <option key={key} value={key}>
                {categories[key]}
              </option>
            ))}
          </select>
          <select onChange={this.handleOnSourceChange}>
            <option key="0" value="0">
              ---
            </option>
            {this.state.sources.map(source => (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            ))}
          </select>
        </div>
        <div className="main">
          <ul>
            {this.state.articles.map((article, index) => (
              <li key={index}>
                <h2>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h2>
                <p>{article.description}</p>
                <span className="author">
                  {article.author ? `- ${article.author} -` : ''}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="powered-by"
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by News API
        </a>
      </div>
    );
  }
}

export default App;
