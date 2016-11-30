function sendMessageAction(from, messageText) {
  return {
    type: 'SEND_MESSAGE',
    from,
    messageText,
  };
}

function refreshChatAction() {
  return {
    type: 'REFRESH_CHAT',
  };
}

export { sendMessageAction, refreshChatAction}