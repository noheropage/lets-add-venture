const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
                unique: true
            }
        },
        user_pronoun: {
            type: DataTypes.STRING
        },
        user_intensity: {
            type: DataTypes.INTEGER
        },
        climbing_ability: {
            type: DataTypes.STRING
        },
        bouldering_ability: {
            type: DataTypes.STRING
        },
        past_climbs: {
            type: DataTypes.STRING
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile',
    },
)

module.exports = Profile;