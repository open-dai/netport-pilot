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
        },
        facebook: {
            exports: 'FB'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap/dist/bootstrap',
        leaflet: '../bower_components/leaflet-dist/leaflet',
        facebook: '//connect.facebook.net/en_US/all'
    }
});
