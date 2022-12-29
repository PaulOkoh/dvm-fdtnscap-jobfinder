require('dotenv').config()
const Sequelize = require('sequelize')
const {DATABASE_LINK} = process.env

const sequelize = new Sequelize(DATABASE_LINK, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized:false
    }
  }
});

module.exports  = {
  getAllJobs: (req, res) => {
    sequelize.query(`select * from jobs`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  }
}