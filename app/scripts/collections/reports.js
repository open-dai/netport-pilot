// Report module
define([
    'jquery',
    'backbone',
    'models/report'
],
function ($, Backbone, ReportModel) {
    'use strict';

    // Default Collection.
    var ReportCollection = Backbone.Collection.extend({
        model: ReportModel,
        parse: function(response) {
            return response.reports;
        },
        url: 'http://localhost:8001/api/reports'
    });

    return ReportCollection;

});
