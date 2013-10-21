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

    //Temporary menu sollution. To be moved either to a template or a collection.
    var navItems = {
        navItems: [
            {
                title: 'Reports',
                href: '#/reports'
            },
            {
                title: 'Add new',
                href: '#/reports/add'
            },
            {
                title: 'User',
                href: '#/user/1'
            }
        ]
    };

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
            this.$el.html(this.template(navItems));
            return this;
        }
    });

    return View;
});
