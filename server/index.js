const express = require('express');
const app = express();
const Models = require('./models');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/classes', function (req, res) {
    res.contentType('application/json');

    Models.class.findAll().then(classes => {
        res.send(classes);
    })
});

app.get('/classes/:id/skills', function (req, res) {
    res.contentType('application/json');

    Models.class.findById(req.params.id).then(desiredClass => {
        desiredClass.getSkills().then(classSkills => {
            res.send(classSkills);
        })
    })
});

app.get('/artifacts', function (req, res) {
    res.contentType('application/json');

    Models.artifact.findAll().then(artifacts => {
        res.send(artifacts);
    })
});

app.get('/artifacts/:id', function (req, res) {
    res.contentType('application/json');

    Models.artifact.findById(req.params.id).then(desiredArtifact => {
        res.send(desiredArtifact);
    })
});

app.get('/subclasses', function (req, res) {
    res.contentType('application/json');

    Models.subclass.findAll().then(subclasses => {
        res.send(subclasses);
    })
});

app.get('/classes/:id/subclasses', function (req, res) {
    res.contentType('application/json');

    Models.class.findById(req.params.id).then(desiredClass => {
        desiredClass.getSubclasses().then(classSubclasses => {
            res.send(classSubclasses);
        })
    })
});

app.listen(7475)
