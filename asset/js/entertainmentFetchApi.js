// ******************************* ENTERTAINMENT API *******************************//
// Make API request

fetch('https://api.nytimes.com/svc/topstories/v2/entertainment.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Extract the first 10 arrays
    const firstTenSport = data.response.slice(1, 15);
    console.log(firstTenSport);
    firstTenSport.forEach(dataValue => {
      const markup04 = `
      <div class="col">
      <div class="card">
      <img src="${dataValue.multimedia.url}" class="card-img-top"
      alt="" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.snippet}</h5>
          <p class="card-text">${dataValue.lead_paragraph}</p>
        <a href="${dataValue.web_url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
        </div>
      </div>
    </div>
      `;

      document.querySelector('.EntertainmentCard').insertAdjacentHTML('beforeend', markup04);
      // const spinner = document.querySelector('.spinner');
      document.querySelector('.spinner').classList.add('d-none')
    })
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

  // ******************************* ENTERTAINMENT API *******************************//