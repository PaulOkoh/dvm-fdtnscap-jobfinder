const updateForm = document.querySelector('.updates-form');
const updateTitle = document.querySelector('#update-title')
const updateCompany = document.querySelector('#update-company')
const updateLocation = document.querySelector('#update-location')
const updateZipcode = document.querySelector('#update-zipcode')
const updateBtn = document.querySelector('#updateBtn')


function getJob() {
  axios.get(`http://localhost:4004/jobs/${id}`)
  .then(res => {
    const job = res.data[0]
    const { 
      job_title:title, 
      job_company:company,
      job_location:location,
      job_zipcode: zipcode     
    } = job
    
    updateTitle.value = title
    updateCompany.value = company
    updateLocation.value = location
    updateZipcode.value = zipcode
    
  })
  .catch(err => console.log(err))
}


function updateJob() {
  getJob()
  let body = {
    title: updateTitle.value,
    company: updateCompany.value,
    location: updateLocation.value,
    zipcode: updateZipcode.value
  }

  axios.put(`http://localhost:4004/jobs/${id}`, body)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}






updateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  updateJob()
  
//  jobTitle.value = ''
//  jobCompany.value = ''
//  jobLocation.value = ''
//  jobZipcode.value = ''
})

//getJob(id)

//how to populate fields of update form
//click button => form is populated with the credentials for clicked id
//create jobs card and update
