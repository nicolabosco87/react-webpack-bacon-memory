import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, FormGroup, FormControl, Button, NavItem } from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/chat';
import NewMessageForm from '../NewMessageForm/NewMessageForm';

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

          <NewMessageForm />

        </Navbar.Form>
        <Nav pullLeft>
          <NavItem href="#" onClick={() => { this.props.actions.refreshChatAction(); }} >Refresh</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);
  }

//<FormGroup>
//<FormControl type="text" placeholder="Message" />
//</FormGroup>
//{' '}
//<Button type="submit" onClick={() => { this.props.actions.sendMessageAction('Baye'); }} >Send Message</Button>

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