document.getElementById("submit").addEventListener("click", function() {
    verifEmail();
});

function verifEmail() {
    // Vérification du champ email

    // Récupération du champ lui-même et de sa valeur
    var champ = document.getElementById("email");
    var valeur = champ.value;
    // Récupération de la balise pour le message d'erreur
    var error = document.getElementById("error");
    // Test si le champ est vide
    if (valeur.trim() === "") {
        error.innerHTML = "Email required"; // Affiche le message d'erreur
        return false;
    }
    // Expression régulière pour le nom :
    var modele = /^[a-z][a-z0-9_.-]*@[a-z][a-z0-9_.-]*[.][a-z]{2,}$/;
    if (modele.test(valeur)) {
        // Cas OK
        error.innerHTML = "";
        document.getElementById("succes").style.display = "flex";
        return true;
    } else {
        // Cas erreur de saisie
        error.innerHTML = "Valid email required";
        return false;
    }
}

var dismissButton = document.getElementById("dismiss");
dismissButton.addEventListener("click", function () {
    document.getElementById("succes").style.display = "none";
});