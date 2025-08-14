const darkmodeToggle = document.querySelector('[data-js="darkmodeToggle"]');

//console.log(darkmodeToggle);

function toggleDarkmode(event) {
  if (event.target.checked) {
    //console.log("test");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

darkmodeToggle.addEventListener("change", toggleDarkmode);
