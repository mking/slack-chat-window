(function () {
  var UserMention = React.createClass({
    render: function () {
      return <a href="#">
        @{this.props.name || this.props.user.get('name')}
      </a>;
    }
  });

  window.UserMention = UserMention;
})();
