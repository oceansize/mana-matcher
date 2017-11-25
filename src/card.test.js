import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Cards', () => {

  let lightningBoltMock = { name: "Lightning Bolt",
                            text: "deals 3 damage",
                            manaCost: "{R}",
                            colors: "Red" }

  let bitterBlossomMock = { name: "Bitterblossom" }

  it('has a name', () => {
    let wrapper = shallow(<Card cardName={ lightningBoltMock } />);
    expect(wrapper.text()).toContain('Lightning Bolt');
  });

  it('has a different name', () => {
    let wrapper = shallow(<Card cardName={ bitterBlossomMock } />);
    expect(wrapper.text()).toContain('Bitterblossom');
  });

  it('has instructional text', () => {
    let wrapper = shallow(<Card cardName={ lightningBoltMock } />);
    expect(wrapper.text()).toContain('deals 3 damage');
  });

  it('has a mana cost', () => {
    let wrapper = shallow(<Card cardName={ lightningBoltMock } />);
    expect(wrapper.text()).toContain('{R}');
  });

  it('has at least one colour', () => {
    let wrapper = shallow(<Card cardName={ lightningBoltMock } />);
    expect(wrapper.text()).toContain('Red');
  });
});
