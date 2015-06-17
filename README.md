# node-force-secure-redirect
Force all incoming HTTP connections to be redirected to secure (HTTPS) version of your express app  

By default, it won't force SSL in your development environment.  

## Install  
`npm install node-force-secure-redirect --save`  

## Usage  
```js  
var forceHTTPS = require('node-force-secure-redirect');  
...  

app.use(forceHTTPS());  
```  

## Tests  
`npm test`  

## License  
Licensed under [GPL v3](http://www.gnu.org/licenses/gpl-3.0.txt)  

## Credits  
Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://twitter.com/riyadhalnur)
