/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/map'
], function ($, _, Backbone, JST, Map) {

    'use strict';

    var Reports = {};

    var ReportData = {
        reports: [
            {
                'title': 'test report'
            },
            {
                'title': 'test report2'
            }
        ]
    };

    Reports.MapLayout = Backbone.View.extend({
        el: '#content',
        template: JST['app/scripts/templates/mapLayout.ejs'],
        render: function() {
            this.$el.html(this.template);

            var map = new Map();
            map.render();

            var list = new Reports.List({'model': ReportData});
            list.render();

            return this;
        }
    });

    Reports.Map = Backbone.View.extend({
        el: '#mapContainer',
        template: JST['app/scripts/templates/map.ejs'],
        render: function() {
            this.$el.html('mapContainer');
            return this;
        }
    });

    Reports.List = Backbone.View.extend({
        el: '#reports',
        template: JST['app/scripts/templates/reportsList.ejs'],
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    });

    return Reports;
});
