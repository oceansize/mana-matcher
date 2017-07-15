import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Cards', () => {

  const wrapper = shallow(<Card />);

  it('renders without crashing', () => {
    shallow(<Card />);
  });

  it('has a name', () => {
    expect(wrapper.text()).toContain('Lightning Bolt');
  });
});

