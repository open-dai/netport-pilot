// Report module
define([
    'app',
    'jquery',
    'backbone',
    'models/types'
],
function (App, $, Backbone, TypesModel) {
    'use strict';

    // Default Collection.
    var TypesCollection = Backbone.Collection.extend({
        model: TypesModel,
        url: App.api+'/api/types'
        //url: 'http://localhost:8888/api/types'
    });

    return TypesCollection;

});
