/*global define*/

define([
    'jquery',
    'backbone',
    'views/layout',
    'views/reports',
    'collections/reports'
], function ($, Backbone, Layout, ReportsView, ReportsCollection) {
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
            //Render the main layout
            var mainLayout = new Layout.MainLayout();
            mainLayout.render();


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
