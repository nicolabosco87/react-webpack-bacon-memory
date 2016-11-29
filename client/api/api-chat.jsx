const REFRESH_MESSAGES_URL = '/client/messages.json';

export const fetchMessages = () => {

  console.log("START FETCHING");

  return fetch(REFRESH_MESSAGES_URL).then(function (response) {
    return response.json().then(function (json) {
      return json;
    });
  });
};
