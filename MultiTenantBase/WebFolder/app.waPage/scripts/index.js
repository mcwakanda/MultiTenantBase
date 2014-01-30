
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var deleteUserButton = {};	// @button
	var saveUserButton = {};	// @button
	var newUserButton = {};	// @button
	var saveDataItemButton = {};	// @button
	var logoutButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	deleteUserButton.click = function deleteUserButton_click (event)// @startlock
	{// @endlock
		sources.user.removeCurrent();
	};// @lock

	saveUserButton.click = function saveUserButton_click (event)// @startlock
	{// @endlock
		sources.user.save({
			onSuccess: function(event){
				//saved
			}
		});
	};// @lock

	newUserButton.click = function newUserButton_click (event)// @startlock
	{// @endlock
		sources.user.addNewElement();
	};// @lock

	saveDataItemButton.click = function saveDataItemButton_click (event)// @startlock
	{// @endlock
		sources.dataItem.save();
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = "/";
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() != null){
			ds.User.getSettings({
				onSuccess: function(event){
					APP.userSettings = event.result;
				}
			});
		} else {
			window.location = "/";
		}
		
		
		$$('currentUsernameText').setValue(WAF.directory.currentUser().userName);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("deleteUserButton", "click", deleteUserButton.click, "WAF");
	WAF.addListener("saveUserButton", "click", saveUserButton.click, "WAF");
	WAF.addListener("newUserButton", "click", newUserButton.click, "WAF");
	WAF.addListener("saveDataItemButton", "click", saveDataItemButton.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
