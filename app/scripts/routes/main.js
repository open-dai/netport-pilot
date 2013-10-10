/*global define*/

define([
    'jquery',
    'backbone',
    'views/layout',
    'views/reports'
], function ($, Backbone, Layout, Reports) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'user': 'user',
            'user/:id': 'user',
            'reports': 'reports'
        },

        index: function() {
            var mainLayout = new Layout.MainLayout();
            mainLayout.render();
            console.log('Welcome to your main router.');
        },

        user: function(id) {
            console.log('Welcome to your user router.');
            console.log(id);
        },

        reports: function() {
            var mainLayout = new Layout.MainLayout();
            mainLayout.render();

            var reportsLayout = new Reports.MapLayout();
            reportsLayout.render();
        }

    });

    return MainRouter;
});
