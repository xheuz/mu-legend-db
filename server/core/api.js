const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/mudb');

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
    
const ClassAndSkills = sequelize.define('class_skill', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    class_id: {
        type: Sequelize.INTEGER
    },
    skill_id: {
        type: Sequelize.INTEGER
    },
}, {
        timestamps: false,
        freezeTableName: true,

    });

Class.belongsToMany(Skill, { as: 'skillsFromClass', through: ClassAndSkills, foreignKey: 'class_id' })
Skill.belongsToMany(Class, { as: 'class', through: ClassAndSkills, foreignKey: 'skill_id' })

Class.getSkillsFromClass().then(associatedTasks => {
    // associatedTasks is an array of tasks
})

// var express = require('express');
// var app = express();
// // neo4j definition
// var db = require('seraph')('http://localhost:7474');
// var Class = require('seraph-model')(db, 'Class');
// var Skill = require('seraph-model')(db, 'Skill');
// var resource = require('seraph-resource');
// Class.compose(Skill, 'skillSet', 'HAS');

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.get('/classes', function (req, res) {
//     res.contentType('application/json');

//     Class.findAll(function (err, classes) {
//         if (err) throw err;

//         res.send(classes);
//     });
// });

// app.get('/classes/:id/skills', function (req, res) {
//     res.contentType('application/json');

//     Class.read(req.params.id, function (err, desiredClass) {
//         res.send(desiredClass.skillSet);
//     });
// });

// var Classes = resource(Class);
// app.use(Classes);
// app.listen(7475)