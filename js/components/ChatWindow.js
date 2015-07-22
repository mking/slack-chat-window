(function () {
  var ChatWindow = React.createClass({
    childContextTypes: {
      userIndex: React.PropTypes.object,
      channelIndex: React.PropTypes.object,
      currentChannel: React.PropTypes.object
    },

    componentDidMount: function () {
      Promise.all([
        Message.refreshMessages(),
        User.refreshUsers(),
        Channel.refreshChannels()
      ]).then(function () {
        var channel = Channel.getChannelByName('general');
        if (!channel) {
          throw new Error('general channel missing');
        }
        this.setState({
          messages: Message.getMessages(),
          userIndex: User.generateUserIndex(),
          channelIndex: Channel.generateChannelIndex(),
          currentChannel: channel,
          loading: false
        });
      }.bind(this));
      emojify.setConfig({
        img_dir: './bower_components/emojify.js/dist/images/basic'
      });
    },

    getChildContext: function () {
       return {
         userIndex: this.state.userIndex,
         channelIndex: this.state.channelIndex,
         currentChannel: this.state.currentChannel
       };
    },

    getInitialState: function () {
      return {
        messages: Immutable.List(),
        userIndex: Immutable.Map(),
        loading: true
      }
    },

    render: function () {
      return <React.addons.CSSTransitionGroup
          className="chat-window"
          transitionName="chat-window">
        <MessageList messages={this.state.messages}/>
        {this.state.loading && <LoadingScreen key="loadingScreen"/>}
      </React.addons.CSSTransitionGroup>;
    }
  });

  window.ChatWindow = ChatWindow;
})();
