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
        authStatusUI = `<br>We are ${request.session.nickname}'s travel manager    |   <a href="/auth/logout">Logout</a><br>`;
      }
      return authStatusUI;
    }
  }