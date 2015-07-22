(function () {
  // https://api.slack.com/docs/formatting
  var MessageText = React.createClass({
    contextTypes: {
      userIndex: React.PropTypes.object,
      channelIndex: React.PropTypes.object
    },

    parse: function (text) {
      var commands = [];
      var command = '';
      for (var i = 0; i < text.length; i++) {
        if (text[i] === '<') {
          commands.push(command);
          command = text[i];
        } else if (text[i] === '>') {
          command += text[i];
          commands.push(command);
          command = '';
        } else {
          command += text[i];
        }
      }
      commands.push(command);
      return Immutable.Seq(commands).filter(function (command) {
        return command.length;
      }).toList();
    },

    render: function () {
      return <div
        className={'message-text'}>
        {this.parse(this.props.text).map(function (command, i) {
          if (command.length >= 2 && command[0] === '<') {
            var innerCommand = command.slice(2, -1);
            var tokens = innerCommand.split('|');
            var id = tokens[0];
            var name = tokens[1];
            switch (command[1]) {
              case '@': {
                return <UserMention
                  key={i}
                  user={this.context.userIndex.get(id)}
                  name={name}/>;
                break;
              }

              case '#': {
                return <ChannelMention
                  key={i}
                  channel={this.context.channelIndex.get(id)}
                  name={name}/>;
                break;
              }
            }
          }
          return <span
            key={i}
            dangerouslySetInnerHTML={{__html: emojify.replace(command)}}/>;
        }.bind(this))}
      </div>;
    }
  });

  window.MessageText = MessageText;
})();
