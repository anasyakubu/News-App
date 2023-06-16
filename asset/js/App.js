// URL = https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA
// API KEY = vUg7zhlHSKqpVKr23LyzUqniX3ReARwA

// Make API request
fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA',)
  .then(response => response.json())
  .then(data => {
    // console.log(data.data);
    return data.results;
  })
  .then(data => {
    console.log(data);

    // Do something with the answer, e.g., display it on the page

    data.forEach(dataValue => {
      const markup01 = `<div class="col">
      <div class="card">
        <img src="${dataValue.multimedia[0].url}" class="card-img-top"
          alt="Hollywood Sign on The Hill" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.title}</h5>
          <p class="card-text">${dataValue.abstract}</p>
          <blockquote class="blockquote mb-0">
          <footer class="blockquote-footer">${dataValue.byline}<cite title="Source Title">| ${dataValue.created_date}</cite></footer>
        </blockquote>
          <a href="${dataValue.url}" target="_blank" class="btn btn-primary">Read More</a
        </div>
      </div>
    </div> `;

      document.querySelector('.worldNewsCard').insertAdjacentHTML('beforeend', markup01);
    });
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
