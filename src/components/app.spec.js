import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import App from './App';

describe('<Header />', () => {
  it('should display a single div tag', ()=> {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
