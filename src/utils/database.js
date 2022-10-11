const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'tote1303',
    database: 'Products'
})

module.exports = db