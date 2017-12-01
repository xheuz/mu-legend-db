const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://mu:mu@172.28.6.52:3306/mudb');


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

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

Class.findAll().then(users => {
    console.log(users)
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