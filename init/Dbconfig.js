let {Sequelize,DataTypes,Model,QueryTypes,Op}= require("sequelize")

let sequelize = new Sequelize("mysql://root:@localhost:3309/library")

module.exports = {sequelize,DataTypes,Model,QueryTypes,Op}