/*global require*/
'use strict';

require(["config"], function() {
    require(['app', 'routes/main'], function (app, MainRouter) {

        app.router = new MainRouter();

        Backbone.history.start({
            pushState: false,
            root: app.root
        });
    });

});
