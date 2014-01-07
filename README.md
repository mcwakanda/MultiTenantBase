#Wakanda Multi-Tenant Base Project

This is a community project designed to demonstrate one approach for a multi-tenant application built with the Wakanda platform.

To learn more about Wakanda, please visit [www.wakanda.org](http://www.wakanda.org "wakanda.org”).

###Things to notice

* **CustomLogin Example:** Most concepts covered in this previous example are also utilized in the MultiTenantBase project [https://github.com/mcwakanda/CustomLogin]("https://github.com/mcwakanda/CustomLogin”)
* **MultiTenantBase Solution/Directory:** A user with username “admin” and password “admin” has been added to the directory and assigned to the “Admin” group. This invokes the security system. You will be prompted for this username/password on server startup.
* **MultiTenantBase/bootstraps/main.js:** This is the main bootstrap file and serves as the place where we define our login listener.
* **MultiTenantBase Solution/required.js** - this is where the login function lives. It is specified in the directory.setLoginListener function mentioned above. Notice the returned user object includes an account ID in the session storage. This is only accessible server side.
* **MultiTenantBase Solution/required.js:** Defines a settings object of the project, including the string used for salt when hashing passwords.
* **MultiTenantBase/Model/DataItem/DataItem-events.js:** Each DataClass you want to limit to the specific account requires an “account” association and an onRestrictingQuery event to return only matches for the account requested.
* **MultiTenantBase/DeveloperTools/generateData.js:** Generate some accounts and users by running this script server side. All users will have the password "password".

###How does it flow?
1. Go to the index page, this is where you can create an account
2. Only hashed passwords are saved in the datastore
