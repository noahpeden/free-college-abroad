import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Header from './Header';

describe('<Header />', () => {
  it('should display a single video tag', ()=> {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('video')).to.have.length(1);
  });
  it('should display a single img tag', ()=> {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('should display two div tags', ()=> {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('div')).to.have.length(2);
  });
});
