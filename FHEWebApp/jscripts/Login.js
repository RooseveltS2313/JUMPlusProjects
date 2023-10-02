
function goBack() {
document.getElementById(cancelbtn).onclick = location.href = "hoKEA.html";
}

function processForm() {
    let userName = document.getElementById("name").value;
    let passWord = document.getElementById("pass").value;

    if (userName === "GBH" && passWord === "Yakuza") {
        location.href = "browse.html"
    } else {
        alert("Sorry " + userName + " but the information did not match.");
    }

    return false;
}


