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

    var menuItems = {
		menuItems: [
			{title: 'Reports', href: '#/reports'},
			{title: 'Add new', href: '#/reports/add'},
			{title: 'User', href: '#/user/1'}
		]
    };

    View.MainLayout = Backbone.View.extend({
		el: '#container',
		template: JST['app/scripts/templates/layout.ejs'],
		render: function() {
			//Old compile
			//var compiledTemplate = _.template( this.template );
			this.$el.html(this.template);

			var menu = new View.Menu();
			menu.render();

			var footer = new View.Footer();
			footer.render();
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

	View.Footer = Backbone.View.extend({
		el: '#footer',
		template: JST['app/scripts/templates/footer.ejs'],
		render: function() {
			this.$el.html(this.template);
			return this;
		}
	});

    return View;
});