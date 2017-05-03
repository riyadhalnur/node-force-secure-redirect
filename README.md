[![Build Status](https://travis-ci.org/riyadhalnur/node-force-secure-redirect.svg?branch=master)](https://travis-ci.org/riyadhalnur/node-force-secure-redirect)  

# node-force-secure-redirect

[![Greenkeeper badge](https://badges.greenkeeper.io/riyadhalnur/node-force-secure-redirect.svg)](https://greenkeeper.io/)
Force all incoming HTTP connections to be redirected to secure (HTTPS) version of your express app.  

Works for node apps directly behind an Amazon ELB (Elastic Load Balancer).

## Install  
`npm install node-force-secure-redirect --save`  

## Usage  
```js  
var forceHTTPS = require('node-force-secure-redirect');  
...  
...
...
app.set('trust proxy'); // this is important when your app is behind an ELB
app.use(forceHTTPS('environment'));  
```  
where the environment *parameter* (string or array of strings) are the environment for which you want to enforce SSL on. If no environment string is passed in, HTTPS will not be enforced on any environment.

## Tests  
`NODE_ENV=testing npm test`  

## License  
Licensed under [GPL v3](http://www.gnu.org/licenses/gpl-3.0.txt)  

## Credits  
Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://twitter.com/riyadhalnur)
