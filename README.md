clinical:hipaa-utility
====================================================

HIPAA Utility for inspecting and generating audits from HIPAA compliant applications.

====================================================
#### Installation

Begin by simply downloading the application:

````bash
git clone http://github.com/clinical-meteor/hipaa-utility
cd hipaa-utility
````

====================================================
#### Connecting to an External Application

You'll usually want to run this application in conjunction with a separate app.  So, assuming that your main app is running on port ``3000``, you'll want to run the Hipaa Audit Utility on port ``4000``.  You'll also need to connect to the existing database, which is usually 1 above the specified app port.  

````js
MONGO_URL=mongodb://localhost:3001 meteor --port 4000
````


====================================================
#### Architecture

![HipaaLog Architecture](https://raw.githubusercontent.com/clinical-meteor/hipaa-logger/master/docs/HIPAA%20Audit%20Log%20-%20Utility%20Configuration%20-%20Page%204.png)

------------------------
### License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
