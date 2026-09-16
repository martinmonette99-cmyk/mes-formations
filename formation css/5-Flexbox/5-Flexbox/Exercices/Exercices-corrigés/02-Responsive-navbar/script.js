const navToggler = document.querySelector(".toggler-container");
const navigation = document.querySelector(".navigation");

navToggler.addEventListener("click", toggleNav);

function toggleNav(){
  navigation.classList.toggle("active");
}

new ResizeObserver(entries => {
  if(entries[0].contentRect.width <= 960) {
    navigation.style.transition = "transform 0.3s ease-out";
  } 
  else {
    navigation.style.transition = "none";
  }
}).observe(document.body);