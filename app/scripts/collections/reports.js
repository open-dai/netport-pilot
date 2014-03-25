// Report module
define([
    'app',
    'jquery',
    'backbone',
    'models/report'
],
function (App, $, Backbone, ReportModel) {
    'use strict';

    // Default Collection.
    var ReportCollection = Backbone.Collection.extend({
        model: ReportModel,
        parse: function(response) {
            return response.reports;
        },
        url: App.api+'/api/reports'
        //url: 'http://localhost:8888/api/reports'
    });

    return ReportCollection;

});
