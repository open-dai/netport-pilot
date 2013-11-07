/*global define*/
define([
    'app',
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/report',
    'models/user',
    'views/map'
], function (App, $, _, Backbone, JST, ReportModel, UserModel, MapView) {

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
            this.model = new ReportModel();
            this.model.url = 'http://localhost:8001/api/reports';
            _.bindAll(this);
        },
        showPosition: function(position) {
            this.model.set({
                'lat': position.coords.latitude,
                'lng': position.coords.longitude
            });
            this.mapRender();
        },
        render: function() {
            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }
            this.$el.html(this.template({'types': this.collection.toJSON()}));
            return this;
        },
        mapRender: function() {
            var mapView = new MapView.MapView({model: this.model});
            mapView.render();
        },
        save: function() {
            console.log('Saving data');
            this.model.set({
                'description': $('#description').val(),
                'types_id': $('#types_id').val(),
                'fb_id': UserModel.get('fb_id')
            });
            this.model.save({success: function(){
                App.router.navigate('#/reports', {trigger: true});
            }});
        }
    });

    return View;
});
