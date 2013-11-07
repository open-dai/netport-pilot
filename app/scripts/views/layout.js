/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {

    'use strict';

    var View = {};

    View.BannerLayout = Backbone.View.extend({
        el: '#banner',
        template: JST['app/scripts/templates/banner.ejs'],
        initialize: function() {
            if(this.model) {
                this.model.on('change', this.test, this);
            }
        },
        render: function() {
            console.log('render banner');
            if(this.model){
                this.$el.html(this.template({'user': this.model.toJSON()}));
            } else {
                this.$el.html(this.template);
            }

            var navigation = new View.NavigationLayout();
            navigation.render();

            return this;
        },
        test: function(){
            this.render();
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
            this.$el.html(this.template);
            return this;
        }
    });

    return View;
});
