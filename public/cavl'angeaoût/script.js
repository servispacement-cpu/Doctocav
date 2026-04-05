document.getElementById("res").addEventListener("submit" , fbast);

function fbast(event){
  event.preventDefault();
    const nom= document.getElementById("nom").value;
    const age= Number(document.getElementById("age").value);
    if (!document.getElementById("cond").checked) return;
      requete("69c95643c7b5aaf08f336c5d",nom , age);
    }