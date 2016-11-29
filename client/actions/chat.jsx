function sendMessageAction(messageText) {
  return {
    type: 'SEND_MESSAGE',
    messageText,
  };
}

function refreshChatAction() {
  return {
    type: 'REFRESH_CHAT',
  };
}

export { sendMessageAction, refreshChatAction}