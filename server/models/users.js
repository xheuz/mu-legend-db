'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }, {
            hooks: {
                beforeCreate: function(user, done) {
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                }
            }
        })

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }

    const users = User.build();
    User.sync();
    return User;
};
