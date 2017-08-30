import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import getSources from '../../api/get-sources';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sources: []
    };
  }

  componentDidMount() {
    getSources({})
      .then(data => (this.setState({ sources: data.sources, loading: false })));
  }

  render() {
    return (
      <div className="App">
        <h1>awesome-acai</h1>
        <h2>Sources</h2>
        <div className={`loading ${this.state.loading ? '' : 'hide'}`.trim()}>
          Loading ...
        </div>
        <ul className={`${this.state.loading ? 'hide' : ''}`}>
          {
            this.state.sources.map(source => (
              <li key={source.id}>
                <h3>{source.name}</h3>
                {source.description}
              </li>
            ))
          }
        </ul>
        <Footer loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
