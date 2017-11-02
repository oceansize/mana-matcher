import React, { Component } from 'react';
import Card from './Card';

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
    console.log(this.state.searchText);
    console.log(React.version);
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
        <Card cardName={ searchText }/>
      </div>
    );
  };
};

export default Search;
