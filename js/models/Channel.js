(function () {
  var channels = Immutable.List();
  var currentChannel;

  function refreshChannels() {
    return Promise.resolve($.ajax({
      url: './json/channels.json',
      dataType: 'json'
    })).then(function (response) {
      channels = Immutable.fromJS(response).get('channels');
    });
  }

  function getChannelByName(name) {
    return channels.find(function (channel) {
      return channel.get('name') === name;
    });
  }

  function generateChannelIndex() {
    return generateIndex(channels, function (channel) {
      return channel.get('id');
    });
  }

  window.Channel = {
    refreshChannels: refreshChannels,
    getChannelByName: getChannelByName,
    generateChannelIndex: generateChannelIndex
  };
})();
