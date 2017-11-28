'use strict';
module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('Class', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
            freezeTableName: true,

        });

    Class.associate = function (models) {
    models.Class.hasMany(models.Skill, {
        foreignKey: 'class_id',
        sourceKey: 'id'
    });

    }
    const classes = Class.build();

    return Class;
};
