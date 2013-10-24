/*global require*/

'use strict';

require(['config'], function() {
    require(['app', 'backbone', 'routes/main'], function (app, Backbone, MainRouter) {

        app.router = new MainRouter();

        Backbone.history.start({
            pushState: false,
            root: app.root
        });

        
        Backbone.emulateJSON = true;
    });

});
