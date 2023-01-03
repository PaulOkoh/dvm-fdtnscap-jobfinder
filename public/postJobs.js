const postForm = document.querySelector('.posts-form');
const jobTitle = document.querySelector('#title')
const jobCompany = document.querySelector('#company')
const jobLocation = document.querySelector('#location')
const jobZipcode = document.querySelector('#zipcode')
const postsBtn = document.querySelector('#postsBtn')

//const baseURL = `http://localhost:4004`


function postJob() {
  let body = {
    title: jobTitle.value,
    company: jobCompany.value,
    location: jobLocation.value,
    zipcode: jobZipcode.value
  }

  axios.post('http://localhost:4004/jobs', body)
  .then(() =>{

  })
  .catch(err => console.log(err))
}






postsBtn.addEventListener('click', (e) => {
  e.preventDefault()
  postJob()
 jobTitle.value = ''
 jobCompany.value = ''
 jobLocation.value = ''
 jobZipcode.value = ''
})



