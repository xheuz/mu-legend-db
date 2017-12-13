'use strict';
module.exports = (sequelize, DataTypes) => {
    const EndlessTower = sequelize.define('endless_tower', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        stage_id: {
            type: DataTypes.INTEGER
        },
        mobs_id: {
            type: DataTypes.INTEGER
        },
        auras_id: {
            type: DataTypes.INTEGER
        },
    }, {
            timestamps: false,
            freezeTableName: true
        });

    EndlessTower.associate = function (models) {
        models.endless_tower.belongsTo(models.aura, { foreignKey: 'auras_id' });
        models.endless_tower.belongsTo(models.mob, { foreignKey: 'mobs_id' });
        models.endless_tower.belongsTo(models.stage, { foreignKey: 'stage_id' });
    }

    const classes = EndlessTower.build();
    return EndlessTower;
};
