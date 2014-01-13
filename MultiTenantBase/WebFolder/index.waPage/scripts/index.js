
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var loginViewButton = {};	// @button
	var registerViewButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('registerComp').loadComponent('/components/register.waComponent');
	};// @lock

	loginViewButton.click = function loginViewButton_click (event)// @startlock
	{// @endlock
		$$('registerComp').loadComponent('/components/login.waComponent');
	};// @lock

	registerViewButton.click = function registerViewButton_click (event)// @startlock
	{// @endlock
		$$('registerComp').loadComponent('/components/register.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginViewButton", "click", loginViewButton.click, "WAF");
	WAF.addListener("registerViewButton", "click", registerViewButton.click, "WAF");
// @endregion
};// @endlock
