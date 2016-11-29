import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, FormGroup, FormControl, Button, NavItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/chat';


class MenuComponent extends Component {

  render() {
    return (<Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Brand</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Message" />
          </FormGroup>
          {' '}
          <Button type="submit" onClick={() => { this.props.actions.sendMessageAction('Baye'); }} >Send Message</Button>
        </Navbar.Form>
        <Nav pullLeft>
          <NavItem href="#" onClick={() => { this.props.actions.refreshChatAction(); }} >Refresh</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);
  }

}


function mapStateToProps(state) {
  return {
    appState: state,
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);