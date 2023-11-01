module.exports = {
    isOwner: function (request, response) {
      if (request.session.is_logined) {
        return true;
      } else {
        return false;
      }
    },
    statusUI: function (request, response) {
      var authStatusUI = 'Login first'
      if (this.isOwner(request, response)) {
        authStatusUI = `<br>This is ${request.session.nickname}'s collection    |   <a href="/auth/logout">Logout</a><br>`;
      }
      return authStatusUI;
    }
  }