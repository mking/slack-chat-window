(function () {
  var users = Immutable.List();
  var userIndex = Immutable.Map();

  function refreshUsers() {
    return Promise.resolve($.ajax({
      url: './json/users.json',
      dataType: 'json'
    })).then(function (response) {
      users = Immutable.fromJS(response).get('members');
      userIndex = generateIndex(users, function (user) {
        return user.get('id');
      });
    });
  }

  function getUserIndex() {
    return userIndex;
  }

  window.User = {
    refreshUsers: refreshUsers,
    getUserIndex: getUserIndex
  };
})();
