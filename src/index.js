console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  fetchDogImages();
  fetchDogBreed();
});

function fetchDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
      let images = data.message;
      images.forEach((image) => {
        loadImagestoDom(image);
      });
    });
}

function loadImagestoDom(image) {
  let dogsContainer = document.getElementById("dog-image-container");
  let ourImg = document.createElement("img");
  ourImg.src = image;
  dogsContainer.appendChild(ourImg);
}

function fetchDogBreed() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((results) => {
      const breeds = Object.keys(results.message);
      addBreeds(breeds);
    });
}

function addBreeds(breeds) {
  const ul = document.getElementById("dog-breeds");
  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", function (event) {
      event.target.style.color = "blue";
    });
  });
}
