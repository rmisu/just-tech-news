const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //table column definitions go here
        //define an id column
        in: {
            //use the special Sequelize DataTypes object to provide what type of data it is
            type: DataTypes.INTEGER,
            // equivalent to SQL's 'NOT NULL' option
            allowNull: false,
            //instruct that this is the Primary Key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },
        
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //table configuration options go here
        //pass in our imported seqeulize connection (the direct connection to the database)
        sequelize,
        //dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        //dont pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel-casing
        underscored: true,
        //make it to the model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;
