const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Photo extends Model {}

Photo.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        owner_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        uploader_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },

        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'photo',
    }
)

module.exports = Photo