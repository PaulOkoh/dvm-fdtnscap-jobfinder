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
  },

  postNewJob: (req, res) => {
    let {jobTitle, jobCompany, jobLocation, jobZipcode} = req.body

    
    sequelize.query(`insert into jobs(job_title, job_company, job_location, job_zipcode)
    values ('${jobTitle}', '${jobCompany}', '${jobLocation}', '${jobZipcode}')`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))


  }
}