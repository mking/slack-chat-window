(function () {
  var ChatWindow = React.createClass({
    childContextTypes: {
      userIndex: React.PropTypes.object
    },

    componentDidMount: function () {
      Promise.all([
        Message.refreshMessages(),
        User.refreshUsers()
      ]).then(function () {
        this.setState({
          messages: Message.getMessages(),
          userIndex: User.getUserIndex(),
          loading: false
        });
      }.bind(this));
      emojify.setConfig({
        img_dir: './bower_components/emojify.js/dist/images/basic'
      });
    },

    getChildContext: function () {
       return {
         userIndex: this.state.userIndex
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
