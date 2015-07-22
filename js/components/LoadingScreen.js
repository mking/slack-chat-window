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
      // Because the loading screen has to come up fast, we (a) include data inline instead of loading from json, and (b) do not rely on user index to look up the username.
      var messages = Immutable.fromJS([
        {
          text: 'Here\'s your chance, do your dance at the Space Jam',
          user: 'louse'
        },
        {
          text: 'Now I\'m in the limelight cause I rhyme tight',
          user: 'louse'
        },
        {
          text: 'Excellence is my presence, never tense, never hesitant.',
          user: 'louse'
        },
        {
          text: 'They\'re gonna attack you if you\'re on top',
          user: 'louse'
        },
        {
          text: 'I\'m living everyday like a hustle. Another rug to juggle. Another day, another struggle',
          user: 'louse'
        }
      ]);
      return {
        message: messages.get(Math.round(Math.random() * messages.size) % messages.size)
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
