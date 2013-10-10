/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        leaflet: '../bower_components/leaflet/dist/leaflet',
    }
});


require(['app', 'routes/main', 'backbone'], function (app, MainRouter, Backbone) {

    app.router = new MainRouter();

    Backbone.history.start({
        pushState: false,
        root: app.root
    });

});
