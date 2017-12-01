const express = require('express');
const app = express();
const Models = require('../models');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/classes', function (req, res) {
    res.contentType('application/json');

    Models.classes.findAll().then(classes => {
        res.send(classes);
    })
});

app.get('/classes/:id/skills', function (req, res) {
    res.contentType('application/json');

    Models.classes.findById(req.params.id).then(desiredClass => {
        desiredClass.getSkills().then(classSkills => {
            res.send(classSkills);
        })
    })
});

app.listen(7475)
