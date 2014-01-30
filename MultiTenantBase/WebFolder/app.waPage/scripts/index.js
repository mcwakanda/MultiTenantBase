
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() != null){
			ds.User.getSettings({
				onSuccess: function(event){
					debugger;
					APP.userSettings = event.result;
				}
			});
		} else {
			window.location = "/";
		}
		
		
		$$('currentUsernameText').setValue(WAF.directory.currentUser().userName);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
