(function () {
  var LoadingScreen = React.createClass({
    componentDidMount: function () {
      var delay = 500;
      function animateDots() {
        d3.selectAll('.dot')
          .style('visibility', 'hidden')
          .transition()
            .delay(function (d, i) {
              return delay * (i + 1);
            })
            .style('visibility', 'visible');
      }
      animateDots();
      this.interval = setInterval(animateDots, 4 * delay);
    },

    componentWillUnmount: function () {
      clearInterval(this.interval);
    },

    getInitialState: function () {
      return {
        message: LoadingMessage.getRandomMessage()
      };
    },

    render: function () {
      return <div className="loading-screen cover">
        <div className="message">
          <h1>
            Loading{Immutable.Range(0, 3).map(function (i) {
              return <span key={i} className="dot">.</span>;
            })}
          </h1>
          <div className="text">
            {this.state.message.get('text')}
          </div>
          <div className="user">
            added by <UserMention name={this.state.message.get('user')}/>
          </div>
        </div>
      </div>;
    }
  });

  window.LoadingScreen = LoadingScreen;
})();
