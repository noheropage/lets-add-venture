const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class PastClimbs extends Model{}

PastClimbs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        climb_name: {
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
        rating:{
            type:DataTypes.STRING
        },
        api_id: {
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pastClimb',
    },
)

module.exports = PastClimbs;