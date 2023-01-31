const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  form.style.animation = "shake 0.5s ease";
});
