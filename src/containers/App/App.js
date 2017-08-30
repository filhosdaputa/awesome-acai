import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import getSources from '../../api/get-sources';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: []
    };
  }

  componentDidMount() {
    getSources({})
      .then(data => (this.setState({ sources: data.sources })));
  }

  render() {
    return (
      <div className="App">
        <h1>awesome-acai</h1>
        <ul>
          {
            this.state.sources.map(source => (<li key={source.id}>{source.name}</li>))
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
