const testBtn = document.querySelector('#btn')

const baseURL = `http://localhost:4004`

function displayJobs() {
  axios.get(`${baseURL}/jobs`).then((res) => {
    console.log('btn clicked')
    console.log(res.data)


  } ).catch(err => console.log(err))
}


testBtn.addEventListener("click", displayJobs)