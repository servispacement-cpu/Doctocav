

async function requete(cav, nom, age){
    const url = 'https://doctocav.onrender.com/items';
    const payload = { cav, nom, age };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);

        const data = await response.json();
        console.log('Réponse du serveur :', data);
    } catch (error) {
        console.error('Erreur :', error);
    }
}


async function requeteget(cav){
    const url = 'https://doctocav.onrender.com/item?id='+cav;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Erreur :', error);
    } 
}