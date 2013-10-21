/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

    'use strict';

    var View = {};

    View.Login = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/login.ejs'],
        render: function() {
            console.log('render login');
            this.$el.html(this.template);
            return this;
        }
    });

    return View;
});
