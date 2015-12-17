# Status Updater
Basic social media profile page built using AngularJS. To start the server locally, run
```
npm install
npm start
```
and then go to http://localhost:8000/app/ in a browser. Please note that new statuses are not saved to a database and will be removed on a page refresh.


## Running tests
To run the unit tests, run ```npm test```.

To run the integration tests, make sure the server is running, then in another tab, run
```
npm run update-webdriver
npm run protractor```
