import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Cards', () => {

  it('has a name', () => {
    let wrapper = shallow(<Card cardName="Lightning Bolt" />);
    expect(wrapper.text()).toContain('Lightning Bolt');
  });

  it('has a different name', () => {
    let newWrapper = shallow(<Card cardName="Bitterblossom" />);
    expect(newWrapper.text()).toContain('Bitterblossom');
  });

  it('has instructional text', () => {
    let wrapper = shallow(<Card cardName="Lightning Bolt" />);
    expect(wrapper.text()).toContain('deals 3 damage');
  });

  it('has a mana cost', () => {
    let wrapper = shallow(<Card cardName="Lightning Bolt" />);
    expect(wrapper.text()).toContain('{R}');
  });

  it('has at least one colour', () => {
    let wrapper = shallow(<Card cardName="Lightning Bolt" />);
    expect(wrapper.text()).toContain('Red');
  });
});
