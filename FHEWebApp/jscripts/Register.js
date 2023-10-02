    function regProcess() {

        let userName = document.getElementById("name").value;
        let passWord = document.getElementById("pass").value;
        //let realName = document.getElementById("rlname").value;
        //let userEmail = document.getElementById("email).value;

        var toSkip = document.getElementById('skip').checked;

        if (userName === "GBH" && passWord === "Yakuza") {
           if (toSkip == true ) {
            location.href="browse.html"
           } else {
            location.href="Login.html"
           }
        } else {
            alert("Sorry " + userName + " but the information did not match.");
        }
        return false;
    }
    