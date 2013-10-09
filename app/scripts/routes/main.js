/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "user": "user",
            "user/:id": "user"
        },

        index: function() {
            console.log("Welcome to your main router.");
        },

        user: function(id) {
            console.log("Welcome to your user router.");
            console.log(id);
        }

    });

    return MainRouter;
});
