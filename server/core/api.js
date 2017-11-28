const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('mysql://root:root@localhost:3306/mudb', { operatorsAliases: Op });

const Class = sequelize.define('class', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
}, {
        timestamps: false,
        freezeTableName: true,

    });

const Skill = sequelize.define('skill', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    damage: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
}, {
        timestamps: false,
        freezeTableName: true,

    });

Class.hasMany(Skill, {
    foreignKey: 'class_id',
    sourceKey: 'id'
});

Skill.belongsTo(Class, { foreignKey: 'class_id' });

Class.findAll().then(users => {
    console.log(users)
})

const skill = Skill.build();
const classes = Class.build();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/classes', function (req, res) {
    res.contentType('application/json');

    Class.findAll().then(classes => {
        res.send(classes);
    })
});

app.get('/classes/:id/skills', function (req, res) {
    res.contentType('application/json');

    Class.findById(req.params.id).then(desiredClass => {
        res.send(desiredClass.getSkills());
    })
});

var Classes = resource(Class);
app.use(Classes);
app.listen(7475)