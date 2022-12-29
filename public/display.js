const testBtn = document.querySelector('#btn')
let display  = document.querySelector('#display')

const baseURL = `http://localhost:4004`


function createCard(job) {
  const jobCard =
   `<div class="job-card">
  <h2>${job['job_title']}</h2>
  <h3>${job['job_company']}</h3>
  <h4>${job['job_location']} ${job['job_zipcode']}75216</h4>
  <button class="btn btn-more">More</button>
  <button class="btn btn-more">Apply</button>
</div>`
return jobCard
}


function getAllJobs() {
  axios.get(`${baseURL}/jobs`).then((res) => {
    console.log('btn clicked')
    console.log(res.data)

    res.data.forEach(job => {
      const jobCard = 
    createCard(job)

    display.innerHTML +=
    jobCard
  

    })
     
    


  } ).catch(err => console.log(err))
}


//displayJobs()


testBtn.addEventListener("click", getAllJobs)