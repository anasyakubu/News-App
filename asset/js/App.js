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

//*************************** SPORT SECTION **************************** // 
function sportSection() {

  fetch('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
    .then(response => response.json())
    .then(data => {
      // Extract the first 10 arrays
      const firstTenSport = data.results.slice(1, 9);
      console.log(firstTenSport);
      firstTenSport.forEach(dataValue => {
        const markup05 = `

    <div class="col">
    <div class="card">
      <img src="${dataValue.multimedia[0].url}" class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body">
        <h5 class="card-title">${dataValue.title}</h5>
        <p class="card-text">
          <small class="text-muted">${dataValue.subsection}</small>
        </p>
        <a href="${dataValue.url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
      </div>
    </div>
  </div>

      `;

        document.querySelector('.sportSection').insertAdjacentHTML('beforeend', markup05);
      })
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });


}
//*************************** SPORT SECTION **************************** // 

//*************************** TOP STORIES **************************** // 
function topStoriesSection() {

  fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
    .then(response => response.json())
    .then(data => {
      // Extract the first 10 arrays
      const firstTenTopStories = data.results.slice(1, 9);
      console.log(firstTenTopStories);
      firstTenTopStories.forEach(dataValue => {
        const markup06 = `
    <div class="card">
    <img src="${dataValue.multimedia[0].url}" class="card-img-top"
      alt="Hollywood Sign on The Hill" />
     <div class="card-body">
      <h5 class="card-title">${dataValue.title}</h5>
      <a href="${dataValue.url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
      <!-- <p class="card-text">${dataValue.abstract}</p>
    </div> -->
  </div>
</div>
 `;

        document.querySelector('.topStorySection').insertAdjacentHTML('beforeend', markup06);
      })
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });

}

//*************************** TOP STORIES **************************** // 

