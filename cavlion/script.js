document.getElementById("res").addEventListener("submit" , fbast);

function fbast(){
    const nom= document.getElementById("nom").value;
    const age= Number(document.getElementById("age").value);
    if (document.getElementById("cond").checked) {
        var cond = true;
    } else {
        var cond  = false;
    }


    localStorage.setItem("nomL" , nom);
    localStorage.setItem("ageL", age);
    localStorage.setItem("conditL" , JSON.stringify(cond));

    }