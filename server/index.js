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

app.get('/classes/:id', function (req, res) {
    res.contentType('application/json');

    Models.class.findAll({
        where: {
            id: req.params.id
        },
        include: [Models.skill, Models.subclass]
    }).then(classes => {
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

app.get('/classes/:id/subclasses', function (req, res) {
    res.contentType('application/json');

    Models.class.findById(req.params.id).then(desiredClass => {
        desiredClass.getSubclasses().then(classSubclasses => {
            res.send(classSubclasses);
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

app.get('/endless', function (req, res) {
    res.contentType('application/json');

    Models.endless_tower.findAll({
        include: [{
            model: Models.mob, include: [
                { model: Models.mob_type }
            ]
        },
        Models.aura,
        Models.stage]
    }).then(stages => {
        res.send(stages);
    })
});

app.get('/endless/:id', function (req, res) {
    res.contentType('application/json');

    Models.endless_tower.findAll({
        where: {
            stage_id: req.params.id
        },
        include: [{
            model: Models.mob, include: [
                { model: Models.mob_type }
            ]
        },
        Models.aura,
        Models.stage]
    }).then(stage => {
        res.send(stage);
    })
});

app.listen(7475)
