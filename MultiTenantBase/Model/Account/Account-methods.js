model.Account.methods.registerAccount = function(regObj) {	// ** Promoted to Admin **	// a brand new registration, account validation should happen here	debugger;	var nameConflict = ds.Account.find('name == :1', regObj.name);	if(nameConflict){		return {error: 100, errorMessage: 'Account name is taken.'}	} else {		try {			ds.startTransaction();			var theAccount = new ds.Account({name: regObj.name});			//create the 'Owner' user			var theOwner = new ds.User({username: regObj.username, password: regObj.password, account: theAccount});			theOwner.save();			theAccount.save();			ds.commit();			return true;		} catch(err){			ds.rollback();			return err;		}	}		};model.Account.methods.registerAccount.scope = 'public';