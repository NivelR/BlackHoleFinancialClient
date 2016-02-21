'use strict';

var browserSync = require('browser-sync');

var util = require('util');

//var proxyMiddleware = require('http-proxy-middleware');

var config = require('./config').client;

function browserSyncInit(browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;

    var server = {
        baseDir: config.destination,
        routes: routes
    };

    /*
     * You can add a proxy to your backend by uncommenting the line bellow.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
     */
    // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

    browserSync.instance = browserSync.init({
        startPath: '/',
        open: false,
        server: server,
        browser: browser
    });
}

module.exports = function(browser) {
    return function() {
        return browserSyncInit(browser);
    }
}