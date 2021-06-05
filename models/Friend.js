const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Friend extends Model {}

//
Friend.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
       // this is the user id that will be displayed as a friend
        sender: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },
        //This is the user id that will reference the data
        receiver: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },
        //0 for not friends or block, 1 for pending, 2 for friends
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min:0,
                max: 2,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'friend',
    }
)

module.exports = Friend