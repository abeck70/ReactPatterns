'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(2);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(8);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).to.equal(10);
  });
  it('checks shallow state', () => {
    expect(wrapper.state('clicked')).to.equal('');
  });
});
