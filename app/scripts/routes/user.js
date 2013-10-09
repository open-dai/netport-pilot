/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var UserRouter = Backbone.Router.extend({
        routes: {
			'': 'index',
			'/foo': 'foo'
        },
        index: function() {
			console.log('index');
        },
        foo: function() {
			console.log('foo');
        }

    });

    return UserRouter;
});