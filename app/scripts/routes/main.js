/*global define*/

define([
    'jquery',
    'backbone',
    'facebook',
    'views/layout',
    'views/reports',
    'views/bootstrap',
    'collections/reports',
    'models/user'
], function ($, Backbone, FB, Layout, ReportsView, BootstrapView, ReportsCollection, UserModel) {
    'use strict';

    //Init Facebook connection
    FB.init({
        appId      : '524908957595856',                    // App ID from the app dashboard
        channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel file for x-domain comms
        status     : true,                                 // Check Facebook Login status
        xfbml      : true                                  // Look for social plugins on the page
    });

    var MainRouter = Backbone.Router.extend({
        routes: {
            '':             'index',
            'user':         'user',
            'user/:id':     'user',
            'bootstrap':    'bootstrap',
            'reports':      'reports',
            'login':        'login'
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
            mainLayout.render();

            var authorized = UserModel.checkLogin();
            if(authorized) {
                var bannerLayout = new Layout.BannerLayout({model: UserModel});
                bannerLayout.render();
            }

            var reportscollection = new ReportsCollection();
            reportscollection.fetch({success: function(){
                var reportsLayout = new ReportsView.MapLayout({collection: reportscollection});
                reportsLayout.render();
            }, error: function(){
                console.log('Error: Could not load data');
            }});

        },

        login: function() {
            
        }

    });

    return MainRouter;
});
