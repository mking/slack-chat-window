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

  // Generates the following kinds of message groups.
  // UserMessageGroup: {subtype: 'user', user, messages}
  // JoinMessageGroup: {subtype: 'join', ts, messages} // current channel assumed
  function generateMessageGroups(messages) {
    var groups = [];
    for (var i = 0; i < messages.size;) {
      var message = messages.get(i);
      if (message.get('subtype') === 'channel_join') {
        var groupMessages = [];
        for (; i < messages.size && messages.getIn([i, 'subtype']) === 'channel_join'; i++) {
          groupMessages.push(messages.get(i));
        }
        groups.push(Immutable.Map({
          subtype: 'join',
          messages: Immutable.List(groupMessages)
        }));
      } else {
        var groupMessages = [];
        for (; i < messages.size && messages.getIn([i, 'user']) === message.get('user'); i++) {
          groupMessages.push(messages.get(i));
        }
        groups.push(Immutable.Map({
          subtype: 'user',
          messages: Immutable.List(groupMessages)
        }));
      }
    }
    return Immutable.List(groups);
  }

  window.Message = {
    TIME_FORMAT: TIME_FORMAT,
    refreshMessages: refreshMessages,
    getMessages: getMessages,
    generateMessageGroups: generateMessageGroups
  };
})();
