(function () {
  var TIME_FORMAT = 'h:mm A';
  var messages = Immutable.List();

  function refreshMessages() {
    return Promise.resolve($.ajax({
      url: './json/history.json',
      dataType: 'json'
    })).then(function (response) {
      messages = Immutable.fromJS(response).get('messages').map(function (message) {
        return message.merge({
          ts: parseFloat(message.get('ts'))
        });
      });
    });
  }

  function getMessages() {
    return messages;
  }

  function generateMessageGroups(messages) {
    return messages.reduce(function (groups, message) {
      if (groups.isEmpty() || message.get('user') !== groups.last().get('user')) {
        return groups.push(Immutable.Map({
          user: message.get('user'),
          messages: Immutable.List([
            message
          ])
        }));
      } else {
        return groups.updateIn([groups.size - 1, 'messages'], function (messages) {
          return messages.push(message);
        });
      }
    }, Immutable.List());
  }

  window.Message = {
    TIME_FORMAT: TIME_FORMAT,
    refreshMessages: refreshMessages,
    getMessages: getMessages,
    generateMessageGroups: generateMessageGroups
  };
})();
