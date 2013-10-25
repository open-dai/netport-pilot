/*global define*/

define([
    'jquery',
    'backbone',
    'facebook',
    'views/login',
    'views/layout',
    'views/bootstrap',
    'views/map',
    'views/reports',
    'collections/reports',
    'collections/types',
    'models/user',
    'models/report'
], function ($, Backbone, FB, LoginView, Layout, BootstrapView, MapView, ReportsView, ReportsCollection, TypesCollection, UserModel, ReportModel) {
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
            '':               'index',
            'login':          'login',
            'user':           'user',
            'user/:id':       'user',
            'bootstrap':      'bootstrap',
            'map':            'map',
            'reports':        'reports',
            'reports/create': 'createReport',
            'reports/:id':    'reports',
            'logout':         'logout'
        },

        index: function() {
            console.log('routing to startup');
            var that = this;
            var startupLayout = new Layout.StartupLayout();
            startupLayout.render();
            UserModel.login(function(){
                var bannerLayout = new Layout.BannerLayout({model: UserModel});
                bannerLayout.render();
                that.navigate('/reports', {trigger: true});
            });
        },

        login: function() {
            console.log('routing to login');
            var loginLayout = new LoginView.Login();
            var bannerLayout = new Layout.BannerLayout();
            loginLayout.render();
            bannerLayout.render();
        },

        user: function(id) {
            console.log('routing to user ' + id);
            var bannerLayout = new Layout.BannerLayout();
            bannerLayout.render();
        },

        bootstrap: function() {
            console.log('routing to bootstrap');
            var bootstrapLayout = new BootstrapView.BootstrapLayout();
            bootstrapLayout.render();
        },

        map: function() {
            console.log('routing to map');
            var reportsCollection = new ReportsCollection();
            reportsCollection.fetch({success: function(){
                var mapLayout = new MapView.MapLayout({collection: reportsCollection});
                mapLayout.render();
            }, error: function(){
                console.log('Error: Could not load data');
            }});
            
            var bannerLayout = new Layout.BannerLayout();
            bannerLayout.render();
        },

        reports: function(id) {
            console.log('routing to reports');

            var bannerLayout = new Layout.BannerLayout();
            bannerLayout.render();

            //Checking if id is specified.
            if(id) {
                console.log('Rendering report: '+id);
                
                var reportModel = new ReportModel();
                reportModel.url = 'http://localhost:8001/api/reports/'+id;
                reportModel.fetch({success: function(data){
                    var singleReport = new ReportsView.SingleReport({model: data});
                    singleReport.render();
                }});
                
            } else {
                var reportsCollection = new ReportsCollection();
                reportsCollection.fetch({success: function(){
                    var reportsLayout = new ReportsView.ReportsLayout({collection: reportsCollection});
                    reportsLayout.render();
                }, error: function(){
                    console.log('Error: Could not load data');
                }});
                
            }
        },

        createReport: function() {
            console.log('routing to create reports');

            var bannerLayout = new Layout.BannerLayout();
            bannerLayout.render();

            var typesCollection = new TypesCollection();
            typesCollection.fetch({success: function(){
                var createReportView = new ReportsView.ReportCreate({collection: typesCollection});
                createReportView.render();    
            }});
        },

        logout: function() {
            console.log('routing to logout');
            var that = this;
            if(FB) {
                FB.logout(function(){
                    UserModel.set({authorized: false});
                    console.log('Logged out');
                    that.navigate('', {trigger:true});
                });
            }
        }


    });

    return MainRouter;
});
