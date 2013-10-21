/*global define*/

define([
    'jquery',
    'backbone',
    'views/layout',
    'views/reports',
    'views/bootstrap',
    'collections/reports'
], function ($, Backbone, Layout, ReportsView, BootstrapView, ReportsCollection) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '':             'index',
            'user':         'user',
            'user/:id':     'user',
            'bootstrap':    'bootstrap',
            'reports':      'reports'
        },

        index: function() {
            console.log('routing to index');
            var mainLayout = new Layout.MainLayout();
            var bannerLayout = new Layout.BannerLayout();
            mainLayout.render();
            bannerLayout.render();
        },

        user: function(id) {
            console.log('routing to user ' + id);
            var mainLayout = new Layout.MainLayout();
            var bannerLayout = new Layout.BannerLayout();
            mainLayout.render();
            bannerLayout.render();
        },

        bootstrap: function() {
            console.log('routing to bootstrap');
            var bootstrapLayout = new BootstrapView.BootstrapLayout();
            bootstrapLayout.render();
        },

        reports: function() {
            console.log('routing to reports');
            var mainLayout = new Layout.MainLayout();
            var bannerLayout = new Layout.BannerLayout();
            mainLayout.render();
            bannerLayout.render();

            var reportscollection = new ReportsCollection();
            reportscollection.fetch({success: function(){
                var reportsLayout = new ReportsView.MapLayout({collection: reportscollection});
                reportsLayout.render();
            }, error: function(){
                console.log('Error: Could not load data');
            }});

        }

    });

    return MainRouter;
});
