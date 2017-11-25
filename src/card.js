import React, { Component } from 'react';

class Card extends Component {

  render() {
    const card = this.props.cardObject;

    return(
      <div className="Card">
        <ul>
          <li>Card name:   { card.name     }</li>
          <li>Card text:   { card.text     }</li>
          <li>Card CMC:    { card.manaCost }</li>
          <li>Card Colour: { card.colors   }</li>
        </ul>
      </div>
    );
  };
};

export default Card;
