import React, { Component } from 'react';
import Cardlist from './components/card-list/cardlist';
import SearchBox from './components/search-box/searchBox';

import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      placeholder: 'Search monsters',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => {
        throw new Error(err);
      });
  }

  onSearch = (e) => {
    // console.log(e.target.alue);
    // const a = '';a
    if (e.target.value !== undefined) {
      this.setState({ searchField: e.target.value }, () => {
        // console.log(this.state.searchField);
      });
    }
  }

  render() {
    const { monsters, searchField, placeholder } = this.state;
    // eslint-disable-next-line max-len
    const filterMonsters = monsters.filter((m) => m.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox
          placeholder={placeholder}
          onChangeHandler={(e) => this.onSearch(e)}
        />
        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
