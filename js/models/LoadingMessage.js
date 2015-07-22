(function () {
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

  function getRandomMessage() {
    return messages.get(Math.round(Math.random() * messages.size) % messages.size);
  }

  window.LoadingMessage = {
    getRandomMessage: getRandomMessage
  };
})();
