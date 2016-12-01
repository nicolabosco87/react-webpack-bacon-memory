var shortid = require('shortid');

const initialState = {
  messages: [
    /* {
      key: '2e673ea66f894fab8b83ff7e0b5e5b76',
      from: 'George',
      message: 'Ah?',
    },
    {
      key: '2e673ea66f894fab8b83ff7e0b5e5b76',
      from: 'Mike',
      message: 'What\'s up?',
    },*/
  ],
  lastRefresh: null,
};

export default function chat(state = initialState, action = '') {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      const newState = { ...state, messages: [...state.messages, {
        key: shortid(),
        from: action.from,
        message: action.messageText,
      }] };
      return newState;
    }

    case 'MESSAGES_RECEIVED': {
      const newState = { ...state, messages: action.messages.messages };
      return newState;
    }

    default:
      console.log("DEFAULT REDUCER");
      console.log(action);
      return state;
  }
}