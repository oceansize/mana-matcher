import React from 'react';
import { shallow } from 'enzyme';
import CardLocator from './CardLocator';
import Card from './Card';
import BlankCard from './BlankCard';

describe('CardLocator', () => {

  let lightningBoltMock = { name: "Lightning Bolt",
                            text: "deals 3 damage",
                            manaCost: "{R}",
                            colors: "Red" }

  it('renders a "Card" when search matches a valid card', () => {
    let wrapper = shallow(<CardLocator findCard={ "Lightning Bolt" } />);

    expect(wrapper).toContainReact(<Card cardObject={ lightningBoltMock } />);
  });

  // it('renders a "BlankCard" when search does not match a valid card', () => {
  //   let wrapper = shallow(<CardLocator findCard={ "Lightning Bol" } />);
  //
  //   expect(wrapper).toContainReact(<BlankCard />);
  // });
  //
  // it('does not throw an error if card is missing', () => {
  //   expect(() => {
  //     shallow(<Card cardName="Lightn" />);
  //   }).not.toThrow();
  // });
});
