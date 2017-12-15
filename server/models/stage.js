'use strict';

module.exports = (sequelize, DataTypes) => {
    const Stage = sequelize.define('stage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        details: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false
        });

    Stage.associate = function (models) {
        models.stage.hasMany(models.endless_tower, {
            foreignKey: 'stage_id',
            sourceKey: 'id'
        });
    }

    const stage = Stage.build();
    return Stage;
};
