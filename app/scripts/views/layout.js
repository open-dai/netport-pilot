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

    View.MainLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/layout.ejs'],
        render: function() {
            console.log('render main');
            this.$el.html(this.template);
            return this;
        }
    });

    View.BannerLayout = Backbone.View.extend({
        el: '#banner',
        template: JST['app/scripts/templates/banner.ejs'],
        render: function() {
            console.log('render banner');
            this.$el.html(this.template);

            var navigation = new View.NavigationLayout();
            navigation.render();

            return this;
        }
    });

    View.NavigationLayout = Backbone.View.extend({
        el: '#navigation',
        template: JST['app/scripts/templates/navigation.ejs'],
        render: function() {
            console.log('render navigation');
            this.$el.html(this.template());
            return this;
        }
    });

    View.StartupLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/startup.ejs'],
        render: function() {
            console.log('render startup');
            this.$el.html(this.template());
            return this;
        }
    });

    return View;
});
