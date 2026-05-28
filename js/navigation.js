const navigation = document.querySelector(".navigation");
const navigationToggle = document.querySelector(".navigation__toggle");

navigationToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");
    navigationToggle.classList.toggle("open");
});
