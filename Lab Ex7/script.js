let submit = document.getElementById("submit-btn");
let title = document.getElementById("title");
let description = document.getElementById("description");
let agreement = document.getElementById("agreement");


submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value == "") {
        title.className += " empty-input";
    }
    if (description.value == "") {
        description.className += " empty-input";
    }
    if (agreement.checked == false) {
        agreement.parentElement.className += " empty-input";
    }
});