// ******************************* TOP STORY API *******************************//
fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
  .then(response => response.json())
  .then(data => {
    // Extract the first 10 arrays
    const firstTenTopStories = data.results.slice(1, 13);
    console.log(firstTenTopStories);
    firstTenTopStories.forEach(dataValue => {
      const markup01 = `<div class="col">
      <div class="card">
        <img src="${dataValue.multimedia[9]}" class="card-img-top"
          alt="" />
        <div class="card-body">
          <h5 class="card-title">${dataValue.title}</h5>
          <p class="card-text">${dataValue.abstract}</p>
          <blockquote class="blockquote mb-0">
          <footer class="blockquote-footer">${dataValue.byline}<cite title="Source Title">| ${dataValue.created_date}</cite></footer>
        </blockquote>
          <a href="${dataValue.url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
        </div>
      </div>
    </div> `;

      document.querySelector('.worldNewsCard').insertAdjacentHTML('beforeend', markup01);
    })
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

// fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vUg7zhlHSKqpVKr23LyzUqniX3ReARwA')
//   .then(response => response.json())
//   .then(data => {
//     const articles = data.results;
//     articles.forEach(article => {
//       const imageUrl = article.multimedia.length > 0 ? article.multimedia[0].url : ''; // Get the first image URL if available
//       const markup = `
//         <div class="col">
//           <div class="card">
//             <img src="${imageUrl}" class="card-img-top" alt="" />
//             <div class="card-body">
//               <h5 class="card-title">${article.title}</h5>
//               <p class="card-text">${article.abstract}</p>
//               <p class="card-text">
//                 <small class="text-muted">${article.section}</small>
//               </p>
//               <a href="${article.url}" target="_blank" class="btn btn-primary shadow-0">Read More</a>
//             </div>
//           </div>
//         </div>
//       `;
//       document.querySelector('.worldCard').insertAdjacentHTML('beforeend', markup);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });

// ******************************* TOP STORY API *******************************//