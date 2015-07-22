(function () {
  var MessageGroup = React.createClass({
    contextTypes: {
      userIndex: React.PropTypes.object,
      currentChannel: React.PropTypes.object
    },

    getJoinMessage: function (group) {
      var messages = group.get('messages');
      return <span className="joined">
        {'joined ' + (this.context.currentChannel ? '#' + this.context.currentChannel.get('name') : 'the channel')}
        {Immutable.Range(1, messages.size).map(function (i) {
          var message = messages.get(i);
          return <span
            key={i}>
            {i === 1 && '. Also, '}
            <UserMention
              user={this.context.userIndex.get(message.get('user'))}/>
            {' joined' + (i === messages.size - 1 ? '.' : ', ')}
          </span>;
        }.bind(this))}
      </span>;
    },

    render: function () {
      return <div
        className="message-group">
        {this.props.group.get('subtype') === 'user' && this.props.group.get('messages').map(function (message, i) {
          return <MessageItem
            key={i}
            message={message}
            user={i === 0 && this.context.userIndex.get(this.props.group.getIn(['messages', 0, 'user']))}>
            <MessageText text={message.get('text')}/>
          </MessageItem>;
        }.bind(this))}
        {this.props.group.get('subtype') === 'join' && <MessageItem
          message={this.props.group.getIn(['messages', 0])}
          user={this.context.userIndex.get(this.props.group.getIn(['messages', 0, 'user']))}>
          {this.getJoinMessage(this.props.group)}
        </MessageItem>}
      </div>;
    }
  });

  window.MessageGroup = MessageGroup;
})();
