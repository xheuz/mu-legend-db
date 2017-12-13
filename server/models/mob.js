'use strict';

module.exports = (sequelize, DataTypes) => {
    const Mob = sequelize.define('mob', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        is_boss: {
            type: DataTypes.BOOLEAN
        }
    }, {
            timestamps: false
        });

    Mob.associate = function (models) {
        models.mob.belongsTo(models.mob_type, { foreignKey: 'mob_type_id' });
    }

    const mob = Mob.build();

    return Mob;
};
