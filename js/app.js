const elCardTemp = document.getElementById("cardTemp");
const elParent = document.getElementById("parent");
const elLoader = document.getElementById("loader");
const elError = document.getElementById("error");

function init() {
  elLoader.classList.remove("hidden");
  fetch("https://json-api.uz/api/project/fn43/cars")
    .then((res) => res.json())
    .then((res) => {
      ui(res.data);
    })
    .catch(() => {
      elError.classList.remove("hidden");
    })
    .finally(() => {
      elLoader.classList.add("hidden");
    });
}

init();

function ui(cars) {
  elParent.innerHTML = "";
  cars.forEach((element) => {
    const clone = elCardTemp.cloneNode(true).content;
    const elTitle = clone.querySelector("h2");
    const elDescription = clone.querySelector("p");

    elTitle.innerText = element.name;
    elDescription.innerText = `
    Trim: ${element.trim}
    Avlod: ${element.generation}
    Yili: ${element.year}
    Rangi: ${element.colorName} (${element.color})
    Kategoriya: ${element.category}
    `;

    elParent.appendChild(clone);
  });
}
