(function () {
  var MessageList = React.createClass({
    contextTypes: {
      userIndex: React.PropTypes.object
    },

    componentDidUpdate: function () {
      var messageList = React.findDOMNode(this.refs.messageList);
      messageList.scrollTop = messageList.scrollHeight - messageList.clientHeight;
    },

    render: function () {
      return <div
        ref="messageList"
        className="message-list cover">
        {Message.generateMessageGroups(this.props.messages.slice(0, 50).reverse()).map(function (group, i) {
          return <MessageGroup
            key={i}
            group={group}
            user={this.context.userIndex.get(group.get('user'))}/>;
        }.bind(this))}
      </div>;
    }
  });

  window.MessageList = MessageList;
})();
