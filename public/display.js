const testBtn = document.querySelector('#btn')
const display  = document.querySelector('#display')
const jobsBtn = document.querySelector('#findJobs')
//const {getJob} = require('./update.js')


const baseURL = `http://localhost:4004`

function clearPage() {
  display.innerHTML = ''
}


function createCard(job) {
  const jobCard =
   `<div class="job-card">
  <h2>${job['job_title']}</h2>
  <h3>${job['job_company']}</h3>
  <h4>${job['job_location']}  ${job['job_zipcode']}</h4>
  <button class="btn btn-more">More</button>
  <button class="btn btn-more">Apply</button>
  <button class="btn btn-more"
  onclick="getUpdatePage(${job['job_id']})">Update</button>
  <button class="btn btn-more"
  onclick="deleteJob(${job['job_id']})">Delete</button>
</div>`
return jobCard
}


/*function createUpdateForm(job) {}// pop-up as modal?
onclick of update button make form visible and populated
funtion createUpdateForm(job) {
  const updateForm = `
  <div class="updateForm">
  <form action="submit" class="posts-form">
        <ul class="posts-ul">
          <li>
            <label for="title">Title</label>
            <input type="text" class="posts-input" id="title" />
          </li>
          <li>
            <label for="company">Company</label>
            <input type="text" class="posts-input" id="company" />
          </li>
          <li>
            <label for="location">Location</label>
            <input type="text" class="posts-input" id="location" />
          </li>
          <li>
            <label for="zipcode">zipcode</label>
            <input type="text" class="posts-input" id="zipcode" />
          </li>
          <li><button type="submit" class="btn posts-btn" id="postsBtn">Post Job</button></li>
        </ul>
      </form>`

      </div>
      return updateForm


}

*/


function getAllJobs() {
  clearPage()
  axios.get(`${baseURL}/jobs`).then((res) => {
    console.log(res)
    res.data.forEach(job => {
      const jobCard = 
    createCard(job)

    display.innerHTML +=
    jobCard
    })  
    
  } ).catch(err => console.log(err))
}

function deleteJob(id) {
  axios.delete(`${baseURL}/jobs/${id}`)
  .then(() => getAllJobs())
  .catch(err => console.log(err))
}
 
/**
 * click update on card go to update screen
 */
// function getOneJob(id) {
//   axios.get(`${baseURL}/jobs/${id}`)
//   .then((res) => {
//     console.log(res)
//     const {
//       job_title, 
//       job_company, 
//       job_location, 
//       job_zipcode}= res.data
//   })
//   .catch
// }

// function getJob(id) {
//   axios.get(`${baseURL}/jobs/${id}`)
//   .then(res => {
//     const job = res.data[0]
//     const { 
//       job_title =  title, 
//       job_company = company,
//       job_location = location,
//       job_zipcode = zipcode     
//     } = job
    
//     title.value = title
//     company.value = company
//     location.value = location
//     zipcode.value = zipcode
    
//   })
//   .catch(err => console.log(err))
// }

function getUpdatePage(e) {
    location.href="update.html"
    console.log(e.target.value)
    getJob(id)

    /**
     * updateTitle.input = ${job['job_title']}
     * updateCompany.input = ${job['job_company']}
     * updateLocation.input = ${job['job_location']}
     * updateZipcode.input = ${job['job_zipcode']}
     */

}


// function updateJob(id) {
//   axios.put(`${baseURL}/jobs/${id}`, body)
//   .then(res => {
//     createUpdateForm(res.data)
//   })
//   .catch(err => console.log(err))
// }

getAllJobs()


//jobsBtn.addEventListener("click", getAllJobs)