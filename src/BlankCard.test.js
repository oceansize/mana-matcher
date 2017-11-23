import React from 'react';
import { shallow } from 'enzyme';
import BlankCard from './BlankCard';

describe('Blank Card', () => {

  it('renders when called', () => {
    let wrapper = shallow(<BlankCard />);
    expect(wrapper.hasClass('BlankCard')).toEqual(true);
  });
});
