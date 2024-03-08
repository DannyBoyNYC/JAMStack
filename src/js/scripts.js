const api =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM";

function getStories() {
  fetch(api)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

function showData(stories) {
  var looped = stories
    .map(
      (story) => `
      <div class="item">
      <picture>
        <img src="${story.multimedia[2].url}" alt="" />
        <caption>${story.multimedia[2].caption}</caption>
      </picture>
        <h3><a href="${story.url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
  `
    )
    .join("");

  document.querySelector(".stories").innerHTML = looped;
}

if (document.querySelector(".home")) {
  getStories();
}
