import React, { Component } from 'react';
import cardData from '../json/AllCards-x.json';

class Card extends Component {

  getCards (card) {
    let selectedCard = cardData[card];
    return selectedCard.name;
  };

  render() {
    return(
      <div className="Card">
        { this.getCards('Lightning Bolt') }
      </div>
    );
  };
};

export default Card;
