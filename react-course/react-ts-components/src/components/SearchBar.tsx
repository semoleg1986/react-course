import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      savedInputs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
      this.setState({ savedInputs });
    } catch (error) {
      console.error(error);
      // Handle the error gracefully
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.savedInputs !== this.state.savedInputs) {
      localStorage.setItem(
        'savedInputs',
        JSON.stringify(this.state.savedInputs)
      );
    }
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchInput } = this.state;
    if (searchInput.trim()) {
      const savedInputs = [...this.state.savedInputs];
      if (!savedInputs.includes(searchInput)) {
        savedInputs.push(searchInput);
        localStorage.setItem('savedInputs', JSON.stringify(savedInputs));
        this.setState({ savedInputs });
      }
    }
    this.setState({ searchInput: '' });
  }

  render() {
    const { searchInput, savedInputs } = this.state;

    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <div className="searchBar">
            <i>
              <BsSearch />
            </i>
            <input
              type="text"
              value={searchInput}
              onChange={this.handleChange}
              placeholder="Search"
            />
            <button type="submit">Search</button>
          </div>
        </form>
        <div className="dropdown">
          {savedInputs && savedInputs.length > 0 && (
            <>
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Search History
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {savedInputs.map((input) => (
                  <button
                    key={input}
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      this.setState({ searchInput: input });
                    }}
                  >
                    {input}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;