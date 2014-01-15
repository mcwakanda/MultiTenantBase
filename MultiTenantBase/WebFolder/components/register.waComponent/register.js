
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'register';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var appLogin = function(username, password){
			WAF.directory.loginByPassword(username, password,{
				onSuccess: function(event){
					
				},
				onError: {
					
				}
			});
		}
	// @region namespaceDeclaration// @startlock
	var registerButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	registerButton.click = function registerButton_click (event)// @startlock
	{// @endlock
		var accountName = $$(getHtmlId('accountNameInput')).getValue();
		var username = $$(getHtmlId('usernameInput')).getValue();
		var password = $$(getHtmlId('passwordInput')).getValue();
		
		ds.Account.callMethod({
			method: 'registerAccount',
			arguments: [{
				name: accountName,
				username: username,
				password: password
			}],
			onSuccess: function(event){
				if(event.result){
					appLogin(username, password);
				} else
			},
			onError: function(err){
				//handle error
				alert('Could not create new account');
			}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_registerButton", "click", registerButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
