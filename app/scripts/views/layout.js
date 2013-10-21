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
    var menuItems = {
        menuItems: [
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
            this.$el.html(this.template);

            var menu = new View.Menu();
            menu.render();

            return this;
        }
    });

    View.Menu = Backbone.View.extend({
        el: '#header',
        template: JST['app/scripts/templates/menu.ejs'],
        render: function() {
            this.$el.html(this.template(menuItems));
            return this;
        }
    });

    return View;
});
