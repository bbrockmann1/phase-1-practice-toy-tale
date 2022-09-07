let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(data => {
      data.forEach(renderToyCard)
      //console.log(data);
    });

    function renderToyCard(toyObj){ //Render each toy object with new elements.
      //console.log(toyObj);
      const div = document.createElement('div');
      const h2 = document.createElement('h2');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const button = document.createElement('button');

      h2.textContent = toyObj.name;
      img.src = toyObj.image;
      p.textContent = `${toyObj.likes} likes`;

      
    };
});

