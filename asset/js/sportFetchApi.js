// ******************************* SPORT API *******************************//
// Make API request

fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
  .then(response => response.json())
  .then(data => {
    // Extract the first 10 arrays
    const firstTenSport = data.results.slice(1, 13);
    console.log(firstTenSport);
    firstTenSport.forEach(dataValue => {
      const markup02 = `
      <div class="col">
      <div class="card">
      <img src="${dataValue.multimedia[0].url}" class="card-img-top"
      alt="" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.title}</h5>
          <p class="card-text">${dataValue.abstract}</p>
          <p class="card-text">
          <small class="text-muted">${dataValue.subsection}</small>
        </p>
        <a href="${dataValue.url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
        </div>
      </div>
    </div>
      `;

      document.querySelector('.sportCard').insertAdjacentHTML('beforeend', markup02);
      // const spinner = document.querySelector('.spinner');
      document.querySelector('.spinner').classList.add('d-none')
    })
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

  // ******************************* SPORT API *******************************//