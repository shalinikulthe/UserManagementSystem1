const { INTEGER, STRING } = require('sequelize');
const {seq} =require('./database');
const Users = seq.define('Contacts',{
    id:
    {
        type:INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:
    {
        type:STRING,
        allowNull: false,
    },
    email:
    {
        type:STRING,
        allowNull: false,
    },
    contact:
    {
        type:STRING,
        allowNull: true,

    },
},
    { timestamps: false, freezeTableName: false });

module.exports = {Users}


