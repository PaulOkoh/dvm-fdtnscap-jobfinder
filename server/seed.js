require('dotenv').config()
const {DATABASE_LINK} = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(DATABASE_LINK, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        rejectUnauthorized: false
    }
  }

});

module.exports = {
  seed: (req, res) => {
      sequelize.query(`
      drop table if exists jobs;
      drop table if exists users;

      create table users(user_id serial primary key,
        email varchar not null,
        passhash varchar(500) not null);

      create table jobs(job_id serial primary key, job_title varchar(100), job_company varchar(100), job_location varchar(100), job_zipcode varchar(5));

      insert into jobs(job_title, job_company, job_location, job_zipcode)
      values ('Salesforce Cloud Platform Architect', 'Sally Beauty Holdings', 'Denton, TX', 76216),
      ('Web Developer', 'Texas Health Resources', 'Arlington, TX', 76011),
      ('Oracle Cloud Supply Chain Planning Solutions Architect', 'Perficient, Inc', 'Plano, TX', 75024),
('Associate Business Consultant', 'Perficient Inc', 'Plano TX', 75024),
('Account Executive-Dallas', 'Perficient Inc', 'Plano, TX', 75024),
('Informatica EDC Developer', 'Perficient Inc', 'Plano, TX', 75024),
('Project Manager/Scrum Master', 'Perficient Inc', 'Plano, TX',75024),
('Account Executive-Cloud Platform Solutions', 'Perficient Inc', 'Plano, TX', 75024),
('Business Consultant with SharePoint experience', 'Perficient Inc', 'Plano, TX', 75024),
('Operations Analyst', 'Bank of America', 'Dallas, TX', 75207),
('Private Wealth Client Associate', 'Bank of America', 'Dallas, TX', 75201),
('Proficiency Coach 1', 'Bank of America', 'Addison, TX', 75001),
('Feature Lead', 'Bank of America', 'Addison, TX', 75001),
('Specialty Asset Associate-Dallas, TX', 'Bank of America', 'Dallas, TX', 75202),
('Training Curriculum Manager', 'Bank of America', 'Plano, TX', 75024),
('Credit Services Rep II', 'Bank of America', 'Richardson, TX', 75082),
('Small Business Onboarding and Proficiency Coach', 'Bank of America', 'Fort Worth, TX', 76155),
('Help Desk Analyst', 'Bank of America', 'Addison, TX', 75001),
('Strategy Corporate Counsel', 'Yum! Brands', 'Plano, TX', 75024),
('Chief Digital & Technology Officer(LAI)', 'Pizza Hut Digital & Technology', 'Plano, TX',75024),
('KFC Team Member', 'KFC', 'Dallas, TX', 75216),
('Product Manager', 'Pizza Hut Digital & Technology', 'Plano, TX',75024),
('Global Climate Strategy Director', 'Yum! Brands', 'Plano, TX', 75024),
('Marketing/CRM Developer II', 'Yum! Brands', 'Plano, TX',75024),
('Sr.Manager, Global Applications', 'Yum! Brands', 'Plano, TX',75024),
('KFC Restaurant General Manager', 'KFC', 'Dallas, TX', 75216),
('Production Maintenance Worker', 'Raytheon Intelligence & Space', 'Dallas, TX',75243),
('Test Technician', 'Raytheon Intelligence & Space', 'Dallas, TX',75243),
('Systems Engineer(Onsite)','Raytheon Intelligence & Space', 'Dallas, TX',75243),
('Operations Programs Manager', 'Raytheon Intelligence & Space', 'Dallas, TX',75243),
('Bilingual Customer Support & Services', 'Southwest Airlines', 'Dallas, TX', 75235),
('Sr Service Desk Representative', 'Southwest Airlines', 'Dallas, TX',75235),
('Executive Assistant', 'Southwest Airlines', 'Dallas, TX',75235),
('FO Instructional Designer', 'Southwest Airlines', 'Dallas, TX',75235),
('Aircraft Appearance Technicians', 'Southwest Airlines', 'Dallas, TX',75235 ),
('Production Standards Analyst', 'Southwest Airlines', 'Dallas, TX', 75235),
('Technical Instructor', 'Southwest Airlines', 'Dallas, TX', 75235),
('Solutions Architect-Cloud', 'Southwest Arilines', 'Dallas, TX', 75235),
('Manufacturing Engineer - North Texas', 'Texas Instruments', 'Dallas, TX', 75243),
('Employee Communications Specialist', 'Texas Instruments', 'Dallas, TX', 75243),
('Process Development Engineer', 'Texas Instruments', 'Dallas, TX', 75243),
('Entry Level Engineering Technician', 'Texas Instruments', 'Dallas, TX', 75243),
('Product Test Technician(DMOS 6)', 'Test Instruments', 'Dallas, TX',75243),
('Ride Operator', 'Six Flags Over Texas', 'Arlington, TX', 76011),
('Park President', 'Six Flags Entertainment', 'Arlington, TX', 76011),
('Line Attendant - Ride Operations', 'Six Flags Over Texas', 'Arlington, TX', 76011),
('Admissions Team Member', 'Six Flags Over Texas', 'Arlington, TX', 76011),
('VP, Human Resources', 'Six Flags Entertainment', 'Arlington, TX', 76011),
('PMO Manager', 'Six Flags, Inc', 'Arlington, TX', 76011),
('Director, In-Park Services', 'Six Flags Over Texas', 'Arlington, TX', 76011),
('Inventory Specialist', 'Six Flags Entertainment', 'Arlington, TX', 76011),
('Business Analyst', 'Six Flags, Inc', 'Arlington, TX', 76011)


      `).then(() => {
        console.log('Database seeded!!!')
        res.sendStatus(200)
      }).catch(err => console.log('DB not seeded', err))
  }
}