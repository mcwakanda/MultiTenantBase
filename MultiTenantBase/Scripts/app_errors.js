﻿//A generic place to keep all error objects//return an error by string IDAPP.getError = function(ID){	var errObj = {error: APP.errors[ID].errorNumber, errorMessage: APP.errors[ID][APP.getUserLanguage]};};APP.errors = {	wrongPassword: {		errorNumber: 1040,		EN: "Incorrect password.",		FR: "Mot de passe incorrect.",		ESP: "Contraseña incorrecta."	},	duplicateUsername: {		errorNumber: 1050,		EN: "Duplicate usernames. Please contact system admin.",		FR: "Dupliquer les noms d'utilisateur. S'il vous plaît contacter administrateur système.",		ESP: "Duplicar nombres de usuario. Por favor, póngase en contacto con administrador de sistema."	}};