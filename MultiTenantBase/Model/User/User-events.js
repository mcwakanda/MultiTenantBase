model.User.password.onSet = function(password) {	this.HA1Key = directory.computeHA1(APP.settings.passwordSalt, password);};model.User.events.onValidate = function() {	// Ensure username is unique	var uniqueName = ds.User.find('username = :1', this.username);	if(uniqueName != null){		return APP.getError("duplicateUsername");	}};model.User.events.onInit = function() {	this.isAdmin = false;	this.language = "EN";};model.User.events.onRestrictingQuery = function() {	//runs the account and user permissions logic	var returnCollection = APP.getReadCollection(this.getName());			//Do additional restrictions beyond the standards if needed		return returnCollection;};model.User.account.events.onInit = function() {	var that = this;	that = APP.getUserAccount();};