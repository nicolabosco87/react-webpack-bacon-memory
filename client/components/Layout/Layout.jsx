import React, { Component } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Messages from '../Messages/Messages';

class LayoutComponent extends Component {

  render() {
    return (<div className="container" >
      <div className="row">
        <div className="col-xs-12">
          <Header />
          <Menu />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <Messages />
        </div>
      </div>
    </div>);
  }

}

export default LayoutComponent;