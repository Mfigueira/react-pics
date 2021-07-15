import { Component } from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async query => {
    try {
      const res = await unsplash.get('search/photos', {
        params: { query },
      });
      this.setState({ images: res.data.results });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
