model.User.entityMethods.checkPassword = function(password) {	var hash = directory.computeHA1(MYAPP.settings.passwordSalt, password);        return (hash === this.HA1Key);};