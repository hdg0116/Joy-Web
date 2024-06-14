var openButton = document.getElementById("openModal");
var modal = document.querySelector(".modal");
var closeButton = document.getElementById("closeModal");

console.log(openButton);
console.log(modal);
console.log(closeButton);

openButton.addEventListener('click', () => {
    modal.style.display = "flex";
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
})