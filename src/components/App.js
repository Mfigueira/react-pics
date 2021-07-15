import { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(query) {
    console.log(query);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
