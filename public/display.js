const testBtn = document.querySelector("#btn");
const display = document.querySelector("#display");
const jobsBtn = document.querySelector("#findJobs");
//const {getJob} = require('./update.js')

const baseURL = `http://localhost:4004`;

function clearPage() {
  display.innerHTML = "";
}

function createCard(job) {
  const jobCard = `<div class="job-card">
  <h2>${job["job_title"]}</h2>
  <h3>${job["job_company"]}</h3>
  <h4>${job["job_location"]}  ${job["job_zipcode"]}</h4>
  <button class="btn btn-more">More</button>
  <button class="btn btn-more">Apply</button>
  <button class="btn btn-more"
  onclick="getUpdatePage(${job["job_id"]})">Update</button>
  <button class="btn btn-more"
  onclick="deleteJob(${job["job_id"]})">Delete</button>
</div>`;
  return jobCard;
}

function getAllJobs() {
  clearPage();
  axios
    .get(`${baseURL}/jobs`)
    .then((res) => {
      console.log(res);
      res.data.forEach((job) => {
        const jobCard = createCard(job);

        display.innerHTML += jobCard;
      });
    })
    .catch((err) => console.log(err));
}

function deleteJob(id) {
  axios
    .delete(`${baseURL}/jobs/${id}`)
    .then(() => getAllJobs())
    .catch((err) => console.log(err));
}

getAllJobs();

function getUpdatePage(id) {
  location.href = "update.html";
  console.log(id);
}
