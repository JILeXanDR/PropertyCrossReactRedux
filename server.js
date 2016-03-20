var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
    compiler = webpack(config);

var express = require('express'),
    app = new (express)(),
    port = 3001;

(function buildApp() {
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
})();

(function routes() {

    app.use('/public', express.static(__dirname + '/public'));

    app.get("*", function (req, res) {
        res.sendFile(__dirname + '/index.html')
    });

})();


app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});