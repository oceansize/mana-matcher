import React, { Component } from 'react';
import CardLocator from './CardLocator';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: "Lightning Bolt"
    };
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate (event) {
    this.setState({ searchText: event.target.value});
  }

  render() {
    let searchText = this.state.searchText;
    return(
      <div>
        <fieldset>
          <input type="text"
                 className="card-search"
                 placeholder="starting text"
                 onChange={ this.inputUpdate }
                 value={ searchText } />
        </fieldset>
        <CardLocator findCard={ searchText }/>
      </div>
    );
  };
};

export default Search;
