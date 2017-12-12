'use strict';
module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
        });

    Class.associate = function (models) {
        models.class.hasMany(models.skill, {
            foreignKey: 'class_id',
            sourceKey: 'id'
        });
        models.class.hasMany(models.subclass, {
            foreignKey: 'class_id',
            sourceKey: 'id'
        });
    }
    
    const classes = Class.build();

    return Class;
};
