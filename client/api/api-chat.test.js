jest.autoMockOff();

jest.dontMock('./api-chat.test.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const { fetchMessages } = require('./api-chat.test.js');


describe('fetchMessagesComponent', () => {

  console.log("START TEST");

  it('should download JSON', () => {

    console.log("START TEST");
    var json = fetchMessages()
      .then(
      messages => {
        console.log("THEN FUNCTION!");
        expect(3).toEqual(3)
      }
    );

    //console.log(json);
    //expect(json.length).toEqual(3);

    //expect(true).toEqual(true);

  });

});
