const express = require('express');
const app = express();
const Models = require('./models');
const auth = require('./auth');

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

let response = function(data, status) {
    return {
        "data": data,
        "status": status
    }
};

app.post('/user', function (req, res) {
    res.contentType('application/json');

    Models.user.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    .then(newUser => {
        res.send(response(newUser, res.statusCode));
    }).catch(err => {
        let errMsg;
        res.send(response({"message":"Duplicate value found for " + Object.keys(err.fields)}, res.statusCode));
        });
});

// app.use(auth);

app.get('/classes', function (req, res) {
    res.contentType('application/json');

    Models.class.findAll().then(classes => {
        res.send(response(classes, res.statusCode));
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
        res.send(response(classes, res.statusCode));
    })
});

app.get('/classes/:id/skills', function (req, res) {
    res.contentType('application/json');

    Models.class.findById(req.params.id).then(desiredClass => {
        desiredClass.getSkills().then(classSkills => {
            res.send(response(classSkills, res.statusCode));
        })
    })
});

app.get('/classes/:id/subclasses', function (req, res) {
    res.contentType('application/json');

    Models.class.findById(req.params.id).then(desiredClass => {
        desiredClass.getSubclasses().then(classSubclasses => {
            res.send(response(classSubclasses, res.statusCode));
        })
    })
});

app.get('/artifacts', function (req, res) {
    res.contentType('application/json');

    Models.artifact.findAll().then(artifacts => {
        res.send(response(artifacts, res.statusCode));
    })
});

app.get('/artifacts/:id', function (req, res) {
    res.contentType('application/json');

    Models.artifact.findById(req.params.id).then(desiredArtifact => {
        res.send(response(desiredArtifact, res.statusCode));
    })
});

app.get('/subclasses', function (req, res) {
    res.contentType('application/json');

    Models.subclass.findAll().then(subclasses => {
        res.send(response(subclasses, res.statusCode));
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
        res.send(response({ imgUrl: Models.endless_tower.prototype.getImgUrl(), stages: stages}, res.statusCode));
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
        res.send(response(stage, res.statusCode));
    })
});

app.listen(7475)
