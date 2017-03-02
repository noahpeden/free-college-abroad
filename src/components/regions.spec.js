import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Regions from './Regions';

describe('<Regions />', () => {
  it('should display 17 div tags', ()=> {
    const wrapper = shallow(<Regions/>);
    expect(wrapper.find('div')).to.have.length(17);
  });
  it('should display five h2 tags', ()=> {
    const wrapper = shallow(<Regions/>);
    expect(wrapper.find('h2')).to.have.length(5);
  });
  it('should display one header tag', ()=> {
    const wrapper = shallow(<Regions/>);
    expect(wrapper.find('header')).to.have.length(1);
  });
  it('should display 20 Link tags', ()=> {
    const wrapper = shallow(<Regions/>);
    expect(wrapper.find('Link')).to.have.length(20);
  });
});
