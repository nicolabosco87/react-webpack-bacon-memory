import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

function mapStateToProps(state) {
  return {
    messages: state.chat.messages,
  };
}

class MessagesComponent extends Component {

  render() {
    const { messages } = this.props;

    return (<Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>From</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((message, key) => (
          <tr key={key} >
            <td>{key}</td>
            <td>{message.from}</td>
            <td>{message.message}</td>
          </tr>
        ))}
      </tbody>
    </Table>);
  }
}

export default connect(mapStateToProps)(MessagesComponent);
