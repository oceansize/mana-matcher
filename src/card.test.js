import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Cards', () => {

  const wrapper = shallow(<Card />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  });

  it('has a name', () => {
    expect(wrapper.text()).toContain('Lightning Bolt');
  });
});