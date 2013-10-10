/*global define*/

define([
    'jquery',
    'backbone',
    'views/layout'
], function ($, Backbone, Layout) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'user': 'user',
            'user/:id': 'user'
        },

        index: function() {
            var mainLayout = new Layout.MainLayout();
            mainLayout.render();
            console.log('Welcome to your main router.');
        },

        user: function(id) {
            console.log('Welcome to your user router.');
            console.log(id);
        }

    });

    return MainRouter;
});
