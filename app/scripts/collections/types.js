// Report module
define([
    'jquery',
    'backbone',
    'models/types'
],
function ($, Backbone, TypesModel) {
    'use strict';

    // Default Collection.
    var TypesCollection = Backbone.Collection.extend({
        model: TypesModel,
        url: 'http://localhost:8001/api/types'
    });

    return TypesCollection;

});
