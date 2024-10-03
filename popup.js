// Get the modal
const termsPopup = document.getElementById("terms-popup");
const termsButton = document.getElementById("terms-button");
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
termsButton.onclick = function () {
    termsPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    termsPopup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == termsPopup) {
        termsPopup.style.display = "none";
    }
}
