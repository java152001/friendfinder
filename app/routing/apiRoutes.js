var path = require('path');

module.exports = (function() {
    'use strict';
    var apiRoutes = require('express').Router();

    apiRoutes.get('/friends', function (req, res) {
        res.json((require('../data/friends.js').friends));
    });

    apiRoutes.post('/add', function (req, res) {
        var newPerson = req.body;
        var friends = require('../data/friends.js')
        friends.friends.push(newPerson);
    });

    return apiRoutes;
})();