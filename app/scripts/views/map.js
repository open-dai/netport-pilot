/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'leaflet'
], function ($, _, Backbone, L) {

    'use strict';

    var MapView = Backbone.View.extend({
        el: '#mapContainer',
        render: function() {
            console.log('Map rendering');

            var map = L.map('mapContainer').setView([56.169401778813686, 14.864437580108644], 13);
            L.tileLayer('http://{s}.tile.cloudmade.com/4e5f745e28654b7eb26aab577eed79ee/997/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>[…]',
                maxZoom: 18
            }).addTo(map);
        }
    });

    return MapView;
});
