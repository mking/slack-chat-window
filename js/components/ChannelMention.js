(function () {
  var ChannelMention = React.createClass({
    render: function () {
      return <a href="#">
        #{this.props.name || this.props.channel.get('name')}
      </a>;
    }
  });

  window.ChannelMention = ChannelMention;
})();
