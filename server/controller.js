require('dotenv').config()
const Sequelize = require('sequelize')
const {DATABASE_LINK} = process.env

const jwt = require('jsonwebtoken')
const {SECRET} = process.env



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
    let {
      title,
      company,
      location,
      zipcode
    } = req.body

    sequelize.query(`insert into jobs(job_title, job_company, job_location, job_zipcode)
    values ('${title}', '${company}', '${location}', '${zipcode}')`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  },

  deleteJob: (req, res) => {
    let { id } = req.params
    sequelize.query(`delete from jobs where job_id = ${id}`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  },

  getJob: (req, res) => {
    let { id } = req.params
    sequelize.query(`select * from jobs where job_id = ${id}`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  },

  updateJob: (req, res) => {
    console.log(req.body);
    let {
      title,
      company,
      location,
      zipcode
    } = req.body
    let { Id } = req.params
    sequelize.query(`
    update jobs set 
    job_title = '${title}',
    job_company ='${company}',
    job_location = '${location}',
    job_zipcode = '${zipcode}'
    where job_id = ${Id}
     `)
     .then(() => res.sendStatus(200)) 
     .catch(err => console.log(err)) 
  },

  searchJobs: (req, res) => {
    let { title } = req.params
    sequelize.query(`select * from jobs where lower(job_title) like '%${title}%'`)
    .then(dbRes => {
      res.status(200).send(dbRes[0])
    })
    .catch(err => console.log(err))
  },

  isAuthenticated: (req, res, next) => {
    console.log(req.headers)
    const headerToken = req.headers.authorization
    if(!headerToken) {
      console.log('error in controller/auth')
      res.sendStatus(401)
    }

    let token

    try {
       token = jwt.verify(headerToken, SECRET)
    }catch (err) {
      err.statusCode = 500
      throw err
    }
    if(!token) {
      const error = new Errror('Authentication failed.')
      error.statusCode = 401
      throw error
    }

    next()
  }
}

