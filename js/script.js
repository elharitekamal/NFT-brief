let openContact = document.querySelector(".contact-open");
let contactUs = document.querySelector(".inputs");
let closeContact = document.querySelector(".contact-close");
let submite = document.querySelector("input-submit");

openContact.addEventListener("click", () => {
  contactUs.classList.add("active");
});
closeContact.onclick = () => {
  contactUs.classList.remove("active");
};
