document.addEventListener("click", clickHandlers);

function clickHandlers(event) {
  if (!event.target.matches("button")) return;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
