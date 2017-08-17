import React, { Component } from 'react';
import cardData from '../json/AllCards-x.json';

class Card extends Component {

  getCard (card) {
    let selectedCard = cardData[card];
    return selectedCard;
  };

  render() {
    const cardName = this.props.cardName;
    return(
      <div className="Card">
        Card name: { this.getCard(cardName).name }
        Card text: { this.getCard(cardName).text }
      </div>
    );
  };
};

export default Card;
