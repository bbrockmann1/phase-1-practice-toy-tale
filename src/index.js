let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the for
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  function fetchToyData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  fetchToyData('http://localhost:3000/toys');

  function renderToy(data){
    const toyContainer = document.getElementById('toy-collection');
    
  };
});





