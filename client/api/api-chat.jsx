const REFRESH_MESSAGES_URL = '/client/messages.json';

export const fetchMessages = () => {

  console.log("START FETCHING");

  return fetch(REFRESH_MESSAGES_URL).then(function (response) {

    console.log("START FETCHING 111");

    return response.json().then(function (json) {

      console.log("START FETCHING 222");

      return json;
    });
  });
};
