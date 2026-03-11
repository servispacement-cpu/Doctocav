document.getElementById("res").addEventListener("submit" , fbast);

function fbast(){
    const nom= document.getElementById("nom").value;
    const age= Number(document.getElementById("age").value);
    if (document.getElementById("cond").checked) {
        var cond = true;
    } else {
        var cond  = false;
    }


    localStorage.setItem("nomB" , nom);
    localStorage.setItem("ageB", age);
    localStorage.setItem("conditB" , JSON.stringify(cond));

    }



    









