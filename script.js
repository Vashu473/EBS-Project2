// catching html elements
const allAtag = document.querySelectorAll("a");
const input = document.getElementById("inp");
// data variable

let cardsArray = [
  {
    image:
      "https://www.allrecipes.com/thmb/eKu_vXTbZJMdFsd5JdbY7kvDy80=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-DDMFS-4x3-b79a6ea27e0344399257ca1df67ca1cd.jpg",
    title: "RICE",
    category: "Breakfast",
  },
  {
    image:
      "https://img.taste.com.au/macIZauT/taste/2016/11/roti-canai-87562-1.jpeg",
    title: "ROTI",
    category: "Dinner",
  },
  {
    image:
      "https://dynamic.tourtravelworld.com/blog_images/14-famous-food-of-rajasthan-you-should-try-20170824042142.jpg",
    title: "Bhati",
    category: "Breakfast",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    title: "ABC",
    category: "Breakfast",
  },
  {
    image:
      "https://www.realsimple.com/thmb/T3U2GqbHOHA8l9GVugp7z3XVHVU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-butter-varieties-guide-2000-234a60f0f2f345efb518970d321d0320.jpg",
    title: "Butter",
    category: "Dinner",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    title: "ABC",
    category: "Lunch",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    title: "ABC",
    category: "Lunch",
  },
  {
    image:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2021/10/paneer-tikka-horizontal.1.jpg",
    title: "Panner Tikka",
    category: "Evening",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    title: "ABC",
    category: "Evening",
  },
  {
    image:
      "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    title: "ABC",
    category: "Evening",
  },
];

onload = () => createNewCards(cardsArray);

let selectedCategory = "EBS";
// creating dynamic cards

const createNewCards = (array) => {
  document.querySelector("#container")?.remove();

  let container = document.createElement("div");
  container.setAttribute("class", "container");
  container.setAttribute("id", "container");

  document.querySelector("body").appendChild(container);

  for (let i = 0; i < array.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("id", "card");

    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.setAttribute("src", array[i].image);

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "card-body");

    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerText = array[i].title;

    div.appendChild(image);
    innerDiv.appendChild(p);
    div.appendChild(innerDiv);

    document.querySelector("#container").appendChild(div);
  }
};

input.addEventListener("input", () => {
  const newArray = cardsArray.filter((data) =>
    data.title.toUpperCase().includes(input.value.toUpperCase())
  );
  createNewCards(newArray);
});

// adding events o html elements dynamically
allAtag.forEach((data) => {
  data.addEventListener("click", () => {
    selectedCategory = data.innerText;

    const newArray =
      selectedCategory === "EBS"
        ? cardsArray
        : cardsArray.filter((data) => data.category === selectedCategory);
    createNewCards(newArray);
  });
});
