import React, { Component } from 'react';
import cardData from './json/AllCards-x.json';
import Card from './Card';
import BlankCard from './BlankCard';

class CardLocator extends Component {

  getCard () {
    let cardtoFind = this.props.findCard;
    let selectedCard = cardData[cardtoFind];
    return selectedCard;
  };

  render() {
    // const card = this.getCard();
    const card = { name: "Lightning Bolt",
                              text: "deals 3 damage",
                              manaCost: "{R}",
                              colors: "Red" }

    if (card === undefined) {
      return(
        <BlankCard />
      );
    } else {
      return(
        <Card cardObject={ card } />
      );
    };
  };
};

export default CardLocator;
