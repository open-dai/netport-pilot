/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/report',
    'models/user',
    'views/map'
], function ($, _, Backbone, JST, ReportModel, UserModel, MapView) {

    'use strict';

    var View = {};

    View.ReportsLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/reports.ejs'],
        render: function() {
            console.log('render reports');
            this.$el.html(this.template({'reports': this.collection.toJSON()}));
            return this;
        }
    });

    View.SingleReport = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/report.ejs'],
        render: function() {
            this.$el.html(this.template({'report': this.model.toJSON()}));

            var mapView = new MapView.MapView({model: this.model});
            mapView.render();
            return this;
        }
    });

    View.ReportCreate = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/createReport.ejs'],
        events: {
            'click button': 'save'
        },
        initialize: function() {
            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }
        },
        showPosition: function(position) {
            $('#lat').val(position.coords.latitude);
            $('#lng').val(position.coords.longitude);
        },
        render: function() {
            var login = UserModel.checkLogin();
            if( login === true ) {
                this.$el.html(this.template({'types': this.collection.toJSON()}));
            
                return this;
            }
        },
        save: function() {
            console.log('Saving data');
            var newReport = new ReportModel();
            newReport.url = 'http://localhost:8001/api/reports';
            newReport.set({
                'description': $('#description').val(),
                'types_id': $('#types_id').val(),
                'lat': $('#lat').val(),
                'lng': $('#lng').val(),
                'fb_id': UserModel.get('fb_id')
            });

            newReport.save();
        }
    });

    return View;
});
