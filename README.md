[![Build Status](https://travis-ci.org/riyadhalnur/node-force-secure-redirect.svg?branch=master)](https://travis-ci.org/riyadhalnur/node-force-secure-redirect)  

# node-force-secure-redirect
Force all incoming HTTP connections to be redirected to secure (HTTPS) version of your express app  

## Install  
`npm install node-force-secure-redirect --save`  

## Usage  
```js  
var forceHTTPS = require('node-force-secure-redirect');  
...  

app.use(forceHTTPS('environment'));  
```  
where the environment *parameter* (string or array of strings) is optional. If no enviroment string is passed in, HTTPS will be enforced across all enviroments.

## Tests  
`NODE_ENV=testing npm test`  

## License  
Licensed under [GPL v3](http://www.gnu.org/licenses/gpl-3.0.txt)  

## Credits  
Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://twitter.com/riyadhalnur)
