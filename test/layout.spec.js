import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Layout from '../client/components/Layout/Layout';

describe('<Layout />', () => {
  it('contains an <Header/> component', function () {
    const wrapper = mount(<Layout/>);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains an <Messages/> component', function () {
    const wrapper = mount(<Layout/>);
    expect(wrapper.find(Messages)).to.have.length(1);
  });

  /*it('should have an initial email state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'markthethomas@gmail.com' });
    wrapper.find('button').simulate('click');

    expect(wrapper.state('email')).to.equal('markthethomas@gmail.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
  });*/

});