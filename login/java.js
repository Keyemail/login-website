const input = document.querySelectorAll("input");

input.forEach(InputElement => { InputElement.addEventListener('input', function() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    document.getElementById("usernameError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    if(!(username == "") && !(password == "")) {
        document.getElementById("usernameWarning").style.display = "none";
        document.getElementById("passwordWarning").style.display = "none";
    }
    else if(!(username == "")){
        document.getElementById("usernameWarning").style.display = "none";
    } else if(!(password == "")) {
        document.getElementById("passwordWarning").style.display = "none";
    }
})});

function login() {
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    if(username == "" && password == "") {
        document.getElementById("usernameWarning").style.display = "inline";
        document.getElementById("passwordWarning").style.display = "inline";
        return;
    }
    else if(username == ""){
        return document.getElementById("usernameWarning").style.display = "inline";
    } else if(password == "") {
        return document.getElementById("passwordWarning").style.display = "inline";
    }

    if(username == "admin" && password == "admin") {
        console.log("Logged in!");
        window.location.href = "/home"
    } else {
        document.getElementById("usernameError").style.display = "inline";
        document.getElementById("passwordError").style.display = "inline";
        return;
    }
}

function enterKey(event) {
    if(event.keyCode === 13) {
        login()
    } else {
        return;
    }
}