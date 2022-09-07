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
  function fetchToyData(){
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(data => data.forEach(renderToy)
    )
    .catch(console.error)
  }
  fetchToyData();

  function renderToy(data){
    const toyContainer = document.getElementById('toy-collection');
    console.log(toyContainer);
    
    
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    btn.className = "like-btn";
    btn.setAttribute('id', '[toy_id]');
    btn.textContent = 'like ❤️'
    
    img.className = "toy-avatar";

    h2.textContent = data.name;
    img.src = data.image;
    p.textContent = `Likes: ${data.likes}`;

    toyContainer.append(h2, img, p, btn)
  };

  renderToy(fetchToyData());

});





