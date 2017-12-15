'use strict';
const imgUrl = 'http://mulegendb.info/server/images/';

module.exports = (sequelize, DataTypes) => {
    const Artifact = sequelize.define('artifact', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        basic_effect: {
            type: DataTypes.STRING
        },
        per_level_increase: {
            type: DataTypes.DOUBLE
        },
        lvl20_effect: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false,
            getterMethods: {
                imgUrl: function () {
                    return imgUrl + 'artifacts/' + this.id + '.png';
                }
            }
        });

    const artifacts = Artifact.build();

    return Artifact;
};
