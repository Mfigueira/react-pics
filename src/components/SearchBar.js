import { Component } from 'react';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleInputChange(e) {
    const query = e.target.value;
    this.setState({ query });
  }

  // To solve the 'this' issue, use arrow functions instead of bind
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="imgSearch">Image Search</label>
            <input
              type="text"
              id="imgSearch"
              placeholder="query..."
              value={this.state.query}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
