(function () {
  var MessageItem = React.createClass({
    getTimestamp: function (timestamp) {
      return <span className="timestamp">{moment(Math.round(timestamp)).format(Message.TIME_FORMAT)}</span>;
    },

    render: function () {
      return <div
        className={classNames('message-item', this.props.user && 'avatar')}>
        <div className="left">
          {this.props.user && <img
            className="avatar-image"
            src={this.props.user.getIn(['profile', 'image_72'])}/>}
          {!this.props.user && this.getTimestamp(this.props.message.get('ts'))}
        </div>
        <div className="right">
          {this.props.user && <header>
            <span className="username">{this.props.user.get('name')}</span>
            {this.getTimestamp(this.props.message.get('ts'))}
          </header>}
          <MessageText text={this.props.message.get('text')}/>
        </div>
      </div>;
    }
  });

  window.MessageItem = MessageItem;
})();
