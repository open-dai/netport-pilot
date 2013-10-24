/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/report'
], function ($, _, Backbone, JST, ReportModel) {

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
            this.$el.html(this.template);
            return this;
        },
        save: function() {
            console.log('Saving data');
            var newReport = new ReportModel();
            newReport.url = 'http://localhost:8001/api/reports';
            newReport.set({
                'title': $('#title').val(),
                'description': $('#description').val(),
                'types_id': $('#types_id').val(),
                'lat': $('#lat').val(),
                'lng': $('#lng').val()
            });

            newReport.save();
        }
    });

    return View;
});
