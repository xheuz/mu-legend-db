'use strict';
const imgUrl = 'http://mulegendb.info/server/images/';

module.exports = (sequelize, DataTypes) => {
    const MobType = sequelize.define('mob_type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false
        });

    MobType.associate = function (models) {
        models.mob_type.hasMany(models.mob, {
            foreignKey: 'mob_type_id',
            sourceKey: 'id'
        });
    }

    const mobType = MobType.build();
    return MobType;
};
