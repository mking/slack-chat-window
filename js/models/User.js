(function () {
  var users = Immutable.List();

  function refreshUsers() {
    return Promise.resolve($.ajax({
      url: './json/users.json',
      dataType: 'json'
    })).then(function (response) {
      users = Immutable.fromJS(response).get('members');
    });
  }

  function generateUserIndex() {
    return generateIndex(users, function (user) {
      return user.get('id');
    });
  }

  window.User = {
    refreshUsers: refreshUsers,
    generateUserIndex: generateUserIndex
  };
})();
