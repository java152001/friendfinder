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
        var scores = [];
        var total = 0;
        for (var i = 0; i < friends.friends.length; i++) {
            for (var j = 0; j < friends.friends[i].scores.length; j++) {
                var diff = parseInt(newPerson.scores[j]) - parseInt(friends.friends[i].scores[j]);
                total = total + diff;
            }
            scores.push({"position": i, "total": Math.abs(total)});
            total = 0;
        }
        
        var value = scores[0].total;
        var position = 0;
        for (var i = 1; i < scores.length; i++) {
            if (scores[i].total < value) {
                value = scores[i].total;
                position = scores[i].position;
            }
        }

        res.send(friends.friends[position]);


    });

    return apiRoutes;
})();