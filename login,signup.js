function showModal(message, redirect) {
    document.getElementById("modal-message").textContent = message;
    document.getElementById("success-modal").style.display = "block";

    if (redirect) {
        document.getElementById("modal-button").onclick = function() {
            window.location.href = "profile.html"; // Redirect to profile page
        };
    }
}

function addacc() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    if (!usernameregex.test(username)) {
        showModal("Enter Valid Email ID", false);
        return false;
    }
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;
    if (!passwordregex.test(password)) {
        showModal("Enter Valid Password", false);
        return false;
    }

    if (localStorage.getItem(username)) {
        showModal("Account Already Exists", false);
        return false;
    } else {
        localStorage.setItem(username, password);
        localStorage.setItem("loggedInUser", username); // Save the logged-in user's email
        showModal("Account created successfully!", true);
        return true;
    }
}

function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usernameregex = /^[A-Za-z0-9_.]+@[A-Za-z]+\.[a-z]{2,6}$/;
    let passwordregex = /^[A-Za-z0-9_.%$#&@]{4,}$/;

    if (!usernameregex.test(username) || !passwordregex.test(password)) {
        alert("Incorrect Email Or Password");
        return false;
    }

    if (localStorage.getItem(username) !== password) {
        alert("Incorrect Email Or Password");
        return false;
    }

    localStorage.setItem("loggedInUser", username); // Save the logged-in user's email
    showModal("Login successful!", true);
    return false;
}
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    const usernameDisplay = document.querySelector(".username");

    if (username && usernameDisplay) {
        usernameDisplay.textContent = username; // Display the saved username
    }
});