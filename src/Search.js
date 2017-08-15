import React, { Component } from 'react';

class Search extends Component {
  //what is constructor?
  constructor(props) {
    super(props);
    this.state = {
      searchText: "Type card name in here"
    };
    // this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate (event) {
    this.setState({ searchText: event.target.value});
    console.log(this.state.searchText)
  }

  render() {
    return(
      <form>
        <input type="text"
               className="card-search"
               placeholder="starting text"
               onChange={ this.inputUpdate.bind(this) }
               value={ this.state.searchText } />
      </form>
    );
  };
};

export default Search;
