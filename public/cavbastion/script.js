document.getElementById("res").addEventListener("submit" , fbast);

function fbast(){
     event.preventDefault();
    const nom= document.getElementById("nom").value;
    const age= Number(document.getElementById("age").value);
    if (!document.getElementById("cond").checked) return;
      requete("69cab13023186b27e2a91b12",nom , age);
    }



    









