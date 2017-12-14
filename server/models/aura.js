'use strict';

module.exports = (sequelize, DataTypes) => {
    const Aura = sequelize.define('aura', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false
        });

    Aura.associate = function (models) {
        models.aura.hasMany(models.endless_tower, {
            foreignKey: 'auras_id',
            sourceKey: 'id'
        });
    }

    const aura = Aura.build();
    return Aura;
};
