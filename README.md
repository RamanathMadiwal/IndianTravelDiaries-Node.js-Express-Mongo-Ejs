# Indian travel diaries

This application is created using Node.js ,express and Ejs.

# Setup

Install all the modules required as per package.json.
Run the node app.js

set the parameters for process.env.DATABASEURL

create mongo database in any website like mlab.
Note down the user,db link and password of db.

heroku config:set DATABASEURL='mongodb://:@ds12345.mlab.com:59670/blog'



## Local Set up

Run the following commands in the terminal.  Be sure to update information as necessary.


export DATABASEURL=mongodb://localhost:27017/IndianTravelDiaries
export SESSION_SECRET=anyphrase



## Heroku + MongoLab setup

Update the variables as follows:

**DATABASEURL** 'mongodb://dbuser:dbpassword@1234.mlab.<span></span>com:19990/IndianTravelDiaries'  
**SESSION_SECRET** 'Whatever phrase you choose'


From terminal :-


heroku config:set DATABASEURL='mongodb://<dbuser>:<dbpassword>@1234.mlab.<span></span>com:19990/IndianTravelDiaries'  
heroku config:set SESSION_SECRET='any  phrase'


# Deployment
![alt tag](https://cloud.githubusercontent.com/assets/25265882/25014274/b08c3a90-2094-11e7-8cd6-d8d26735b434.png "Home Page")


The app is deployed [here](https://stormy-garden-94091.herokuapp.com/) at Heroku .



<div align="center"> <h5 style="color: red" ><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Disclaimer:This web application should not be used for
                    commercial purpose!!Designed and created by Ramanath Madiwal.All &copy rights
                    belongs to www.ramanathmadiwal.com</h5>
            </div>

