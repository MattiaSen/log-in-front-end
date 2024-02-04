document.getElementById("reg-log").addEventListener("click", function() {
    // Cambia la visibilità dell'input "Confirm password"
    var confirmPasswordInput = document.getElementById("confirmpass");
    
    confirmPasswordInput.style.display = (confirmPasswordInput.style.display === "none") ? "block" : "none";

    if (confirmPasswordInput.style.display === "none") {
        document.getElementById("question").innerHTML = "You don't have an account?";
        document.getElementById("reg-log").innerHTML = "Register";
    } else {
        document.getElementById("question").innerHTML = "You have an account?";
        document.getElementById("reg-log").innerHTML = "Log-in";
    }
});