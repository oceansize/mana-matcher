import React from 'react'
import { shallow } from 'enzyme';
import Search from './search';

describe('Search', () => {

  const wrapper = shallow(<Search />);

  it('renders without crashing', () => {
    shallow(<Search />);
  });

  it('accepts text in an input', () => {
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(wrapper.find('input').props().value).toEqual('a');
  });
});
