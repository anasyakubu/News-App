// URL = https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA
// API KEY = vUg7zhlHSKqpVKr23LyzUqniX3ReARwA

//*************************** SEARCH FOR MOVIE FUNCTION **************************** // 
function searchFunction() {
  const searchInput = document.querySelector("#searchInput").value;
  const searchMovieForm = document.querySelector(".searchMovieForm");
  const movieSection = document.querySelector("#movieSection");
  const resultSearch = document.querySelector(".resultSearch");
  //alert(searchInput.value);
  resultSearch.innerHTML = searchInput;
  searchMovieForm.reset();

  // Make API request
  fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchInput}&api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.results;
    })
    .then(data => {
      console.log(data);
      // Do something with the answer, e.g., display it on the page
      data.forEach(dataValue => {
        const markup03 = ` 
      <div class="col">
      <div class="card">
        <img src="${dataValue.multimedia.src}" alt="${dataValue.display_title}" class="card-img-top"
          alt="" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.display_title}</h5>
          <p class="card-text">${dataValue.headline}</p>
          <p class="card-text">${dataValue.summary_short}</p>
          <p class="card-text">
            <small class="text-muted">${dataValue.opening_date}</small>
          </p>
          <a href="${dataValue.link.url}" target="_blank" class="btn btn-warning shadow-0">Watch Now</a>
        </div>
      </div>
    </div>

         `;

        document.querySelector('.searchMovieSection').insertAdjacentHTML('beforeend', markup03);
      });
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });

  movieSection.classList.remove("w3-hide");
  movieSection.scrollIntoView({ behavior: 'smooth' });

}
//*************************** SEARCH FOR MOVIE FUNCTION **************************** // 