// Report module
define([
    'jquery',
    'backbone',
    'facebook'
],
function($, Backbone, FB) {
    'use strict';
    // Default Model.
    var UserModel = Backbone.Model.extend({
        defaults: {
            third_party_id: null
        },

        initialize: function() {
            //this.on('change:authorized', this.authorize, this);
        },

        authorize: function() {
            //console.log('authorized '+this.get('username'));
        },

        checkLogin: function() {
            var that = this;
            FB.getLoginStatus(function(response){
                console.log(response.authResponse);
            });
        },

        login: function(callback) {
            this.checkLogin();
            var that = this;
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me?fields=id,username,name,first_name,last_name,picture', function(response) {

                        that.set({
                            'fb_id': response.id,
                            'username': response.username,
                            'first_name': response.first_name,
                            'last_name': response.last_name,
                            'image': response.picture.data.url,
                            'authorized': true
                        });
                        callback();
                        console.log('Good to see you, ' + response.name + '.');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });

            
        }
    });

    return new UserModel();

});
