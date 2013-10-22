/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

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

    return View;
});
