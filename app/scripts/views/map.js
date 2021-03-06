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

    var myIcon = L.icon({
        iconUrl: 'images/marker-icon.png',
        iconRetinaUrl: 'images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [2, -41],
        shadowUrl: 'images/marker-shadow.png',
        shadowRetinaUrl: 'images/marker-shadow-2x.png',
        shadowSize: [25, 41],
        shadowAnchor: [7, 41]
    });

    View.MapLayout = Backbone.View.extend({
        el: '#main',
        template: JST['app/scripts/templates/map.ejs'],
        render: function() {
            console.log('render map');
            this.$el.html(this.template);

            $('#leaflet_canvas').css('height', $(window).height() - 60);

            var map = L.map('leaflet_canvas').setView([56.169401778813686, 14.864437580108644], 13);
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            _.each(this.collection.models, function(model){
                if(model.get('lat') !== null) {
                    var marker = new L.Marker([model.get('lat'), model.get('lng')], {icon: myIcon});
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
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            var marker = new L.Marker([this.model.get('lat'), this.model.get('lng')], {icon: myIcon});
            marker.bindPopup(this.model.get('description'));
            marker.addTo(map);

            map.dragging.disable();
        }
    });

    return View;
});
