document.getElementById("conx").addEventListener('submit' , accesPages)


function accesPages(){
    if (document.getElementById("idn").value === "Nora" && document.getElementById("mdp").value === "true"){
            window.location.href = "pagecaveurNora.html";
            event.preventDefault();
        } else if (document.getElementById("idn").value === "Bastion" && document.getElementById("mdp").value === "rude"){
             window.location.href = "pagecaveurBastion.html";
            event.preventDefault();
        } else if (document.getElementById("idn").value === "Lion" && document.getElementById("mdp").value === "rude"){
            window.location.href = "pagecaveurLion.html";
            event.preventDefault()
        } else if (document.getElementById("idn").value === "Eve" && document.getElementById("mdp").value === "rude"){
            window.location.href = "pagecaveurEve.html";
            event.preventDefault();
        } else if (document.getElementById("idn").value === "Aigle" && document.getElementById("mdp").value === "rude"){
            window.location.href = "pagecaveurAigle.html";
            event.preventDefault();
        } else if (document.getElementById("idn").value === "Faritas" && document.getElementById("mdp").value === "aupoulet"){
            window.location.href = "pagecaveurFaritas.html";
            event.preventDefault();
        } else {
            alert ("Ces donnees ne figurent pas dans nos dossiers. Veuiller reessayer")
        }
    }
