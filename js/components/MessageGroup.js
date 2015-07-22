(function () {
  var MessageGroup = React.createClass({
    render: function () {
      return <div
        className="message-group">
        {this.props.group.get('messages').map(function (message, i) {
          return <MessageItem
            key={i}
            message={message}
            user={i === 0 && this.props.user}/>;
        }.bind(this))}
      </div>;
    }
  });

  window.MessageGroup = MessageGroup;
})();
