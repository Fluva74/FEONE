const inputEmail = document.querySelector("#input-email");

inputEmail.addEventListener("submit", (e) => {
    e.preventDefault();
    const newEmail = inputEmail.elements.comment;
    const error = document.querySelector(".error");

    if (newEmail.value === "") {
        error.innerText = "Please enter a valid email";
        exPop.style.display = "block";
        console.log("somethins not right");
    } else {
        console.log(inputEmail.elements.comment.value);
        newEmail.value = "";
    }
});

function validateEmail(newEmail) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (newEmail.value === "") {
        error.innerText = "Please enter a valid email";
        exPop.style.display = "block";
        console.log("somethins not right");
    } else newEmail.match(regexEmail);
    newEmail.value = "";
}
