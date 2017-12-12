'use strict';
const imgUrl = 'http://mulegendb.info/server/images/';

module.exports = (sequelize, DataTypes) => {
    const Subclass = sequelize.define('subclass', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        main_equipment: {
            type: DataTypes.STRING
        },
        main_stats: {
            type: DataTypes.STRING
        },
        attack: {
            type: DataTypes.INTEGER
        },
        hp: {
            type: DataTypes.INTEGER
        },
        coop: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
            getterMethods: {
                imgUrl: function () {
                    return imgUrl + 'subclasses/' + this.id + '.png';
                }
            }
        });

    Subclass.associate = function (models) {
        models.subclass.belongsTo(models.class, { foreignKey: 'class_id' });
    }

    const subclasses = Subclass.build();

    return Subclass;
};
