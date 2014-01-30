
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var saveDataItemButton = {};	// @button
	var logoutButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

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
	WAF.addListener("saveDataItemButton", "click", saveDataItemButton.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
