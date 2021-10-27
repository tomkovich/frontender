const title = document.querySelector("h1");
title.textContent = "Yana Tomkovich is the best developer in the Galaxy!";

const links = document.querySelectorAll(".link");
links.forEach((link, index) => {
  if (index % 2 === 0) {
    link.classList.add("red");
  } else {
    link.classList.remove("link");
  }
});

const container = document.getElementById("container");
container.innerHTML = "Ololo <span>hello </span> motherfuckers";

const books = [
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
  },
  {
    id: 3,
    title: "Fight Club",
    year: 1999,
  },
];

const booksWrapper = document.getElementById("books");

books.forEach((book) => {
  const element = document.createElement("p");
  element.textContent = `The movie "${book.title}" was created ${book.year}`;
  element.classList.add("movie");

  booksWrapper.insertAdjacentElement("beforebegin", element);
});
