/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

    'use strict';

    /*
    var LayoutView = Backbone.View.extend({
    template: JST['app/scripts/templates/layout.ejs']
    });
    */
    var View = {};

    View.BootstrapLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/bootstrap.ejs'],
        render: function() {
            console.log('render bootstrap');
            this.$el.html(this.template);
            return this;
        }
    });

    return View;
});
