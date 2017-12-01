'use strict';
module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
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
        }
    }, {
            timestamps: false,
            freezeTableName: true,

        });

    Skill.associate = function (models) {
        models.Skill.belongsTo(models.Class, { foreignKey: 'class_id' });
    }
    const skill = Skill.build();

    return Skill;
};
