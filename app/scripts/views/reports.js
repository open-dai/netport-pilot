/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/map'
], function ($, _, Backbone, JST, Map) {

    'use strict';

    //Stuff
    var Reports = {};

    Reports.MapLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/mapLayout.ejs'],
        render: function() {
            console.log('render reports');
            this.$el.html(this.template);

            var map = new Map();
            map.render();
            var list = new Reports.List({collection: this.collection});
            list.render();

            return this;
        }
    });

    Reports.List = Backbone.View.extend({
        el: '#reports',
        template: JST['app/scripts/templates/reportsList.ejs'],
        render: function() {

            this.$el.html(this.template({'reports': this.collection.toJSON()}));
            return this;
        }
    });

    return Reports;
});
