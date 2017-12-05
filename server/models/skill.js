'use strict';
module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('skill', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        damage: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        kind: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
        });

    Skill.associate = function (models) {
        models.skill.belongsTo(models.class, { foreignKey: 'class_id' });
    }
    const skill = Skill.build();

    return Skill;
};
