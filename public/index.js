const findTitle = document.querySelector('#findTitle')
const findLocation = document.querySelector('#findLocation')
const jobsResult  = document.querySelector('#display')
const searchBtn = document.querySelector('#search')


const baseURL = `http://localhost:4004`

function clearResultsPage() {
  jobsResult.innerHTML = ''
}


function createSearchCard(job) {
  const searchCard =
   `<div class="job-card">
  <h2>${job['job_title']}</h2>
  <h3>${job['job_company']}</h3>
  <h4>${job['job_location']}  ${job['job_zipcode']}</h4>
  <button class="btn btn-more">More</button>
  <button class="btn btn-more">Apply</button>
  
</div>`
return searchCard
}

function searchJobs() {
  clearResultsPage()
let value = findTitle.value
  axios.get(`${baseURL}/job/${value}`)
  .then((res) => {
    console.log(res)
    res.data.forEach((value) => {
      const searchCard = createSearchCard(value)
      jobsResult.innerHTML += searchCard
    })

  }).catch(err => console.log(err))
  
}


searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  searchJobs()
  findTitle.value = ''
})




