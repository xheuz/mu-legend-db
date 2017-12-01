'use strict';
module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('classes', {
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
    models.classes.hasMany(models.skills, {
        foreignKey: 'class_id',
        sourceKey: 'id'
    });

    }
    const classes = Class.build();

    return Class;
};
