/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'leaflet'
], function ($, _, Backbone, JST, L) {

    'use strict';

    var View = {};

    View.MapLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/map.ejs'],
        render: function() {
            console.log('render map');
            this.$el.html(this.template);

            $('#leaflet_canvas').css('height', $(window).height() - 60);

            var map = L.map('leaflet_canvas').setView([56.169401778813686, 14.864437580108644], 13);
            L.tileLayer('http://{s}.tile.cloudmade.com/4e5f745e28654b7eb26aab577eed79ee/997/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>[…]',
                maxZoom: 18
            }).addTo(map);

            _.each(this.collection.models, function(model){
                if(model.get('lat') !== null) {
                    var marker = new L.Marker([model.get('lat'), model.get('lng')]);
                    marker.bindPopup(model.get('description'));
                    marker.addTo(map);
                }
            });

            return this;
        }
    });

    View.MapView = Backbone.View.extend({
        el: '#map',
        template: JST['app/scripts/templates/map.ejs'],
        render: function() {
            this.$el.html(this.template);

            var map = L.map('leaflet_canvas').setView([this.model.get('lat'), this.model.get('lng')], 16);
            L.tileLayer('http://{s}.tile.cloudmade.com/4e5f745e28654b7eb26aab577eed79ee/997/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>[…]',
                maxZoom: 18
            }).addTo(map);

            var marker = new L.Marker([this.model.get('lat'), this.model.get('lng')]);
            marker.bindPopup(this.model.get('description'));
            marker.addTo(map);
        }
    });

    return View;
});
