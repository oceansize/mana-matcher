import React, { Component } from 'react';
import './BlankCard.css';


class BlankCard extends Component {

  render() {

    return(
      <div className="BlankCard">
      <ul>
        <li>Card name:  </li>
        <li>Card text:  </li>
        <li>Card CMC:   </li>
        <li>Card Colour:</li>
      </ul>
      </div>
    );
  };
};

export default BlankCard;
