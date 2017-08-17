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
        Card name: { card.name }
        Card text: { card.text }
      </div>
    );
  };
};

export default Card;
