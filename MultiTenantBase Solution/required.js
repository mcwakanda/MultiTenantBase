﻿function userLogin(username, password){	//allow for admin login through directory	if(username == 'admin'){		return false;	}	//validate the user	var userCollection = ds.User.query("username == :1", username);	if(userCollection.length > 1){		// in the event that username becomes not unique		return {error: 1050, errorMessage: 'Duplicate usernames. Please contact system admin.'};	} else if(userCollection.length == 0 || username == "admin"){		return false; // reverts login to the directory, no matching users	} else {		var loginSuccess = true;		var theUser = userCollection[0];		//check the validation		if(!theUser.checkPassword(password)){			loginSuccess = false;			loginError = {error: 1055, errorMessage: 'password incorrect'};		};		//do additional checks if needed				if(loginSuccess){			//return a user object			return {				ID: theUser.ID,				name: theUser.username,				fullName: theUser.fullName,				belongsTo: ['User']			}		} else {			//return the error			return loginError;		}	}}