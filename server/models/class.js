'use strict';
const imgUrl = 'http://mulegendb.info/server/images/';

module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define('class', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        lore: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
            getterMethods: {
                imgUrl: function () {
                    return imgUrl + 'classes/' + this.id + '.jpg';
                }
            }
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
