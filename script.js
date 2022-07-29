async function fetchdata() {
    const breeds = await fetch(
      "https://api.thedogapi.com/v1/breeds",
      {
        method: "GET"
      }
    );
    const dogs = await breeds.json();
    loaddata(dogs);
  }
  function loaddata(dogs) {
    const product = document.createElement("div");
    dogs.forEach((breed) => {
      const breedcontainer = document.createElement("div");
      breedcontainer.className = "container";
      breedcontainer.innerHTML = `
      <div><h1>  ${breed.name}</h1><br>
      <img src="${breed.image.url}" class="image"><br>
      <div><span>Breed-Group  : </span> ${breed.breed_group}</div><br>
      <div><span>Life-Span  : </span>  ${breed.life_span}</div><br>
      <div><span>Bred-For : </span> ${breed.bred_for}</div><br>
      
    `;
      product.append(breedcontainer);
    });
    document.body.append(product);
  }
  fetchdata();