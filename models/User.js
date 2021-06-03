const {Model, DataTypes} = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection')

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // first_name: {
        //     type:DataTypes.STRING,
        //     allowNull: false
        // },
        // last_name: {
        //     type:DataTypes.STRING,
        //     allowNull: false
        // },
        //emails must be unique
        email: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //password must be at leaste 8 characters long
        auth0_id: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true
        }
    },
    {
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData
        //     },
        //     beforeUpdate: async (updateUserData) => {
        //         updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
        //         return updateUserData;
        //     }
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },

);

module.exports = User;