// ******************************* SPORT API *******************************//
// Make API request
fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports &api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
  .then(response => response.json())
  .then(data => {
    // console.log(data.data);
    return data.response.docs;
  })
  .then(data => {
    console.log(data);
    // Do something with the answer, e.g., display it on the page

    data.forEach(dataValue => {
      const markup02 = `
      <div class="col">
      <div class="card">
      <img src="${dataValue.multimedia[9]}" class="card-img-top"
      alt="" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.headline.main}</h5>
          <p class="card-text">${dataValue.abstract}</p>
          <p class="card-text">
          <small class="text-muted">${dataValue.subsection_name}</small>
        </p>
        <a href="${dataValue.web_url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
        </div>
      </div>
    </div>
      `;
      document.querySelector('.sportCard').insertAdjacentHTML('beforeend', markup02);
    });
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
  // ******************************* SPORT API *******************************//