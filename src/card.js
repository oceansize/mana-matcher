import React, { Component } from 'react';
import cardData from '../json/AllCards-x.json';

class Card extends Component {

  getCard () {
    let card = this.props.cardName;
    let selectedCard = cardData[card];
    return selectedCard;
  };

  render() {
    const card = this.getCard();
    return(
      <div className="Card">
        <ul>
          <li>Card name: { card.name }</li>
          <li>Card text: { card.text }</li>
          <li>Card CMC:  { card.manaCost }</li>
        </ul>
      </div>
    );
  };
};

export default Card;
