const id = new URL(window.location.href).searchParams.get("id");
console.log(id);

const orderId = document.getElementById('orderId');
orderId.innerHTML = id;

localStorage.clear();


// l'asynchrone en JS
// il n'y a qu'un seul fil d'exécution du code source.
// chaque ligne sera exécutée l'une après l'autre
// en attendant la fin de l'exécution de la ligne précédente.

// Il n'y a pas d'autre code qui pourra être exécuté en parallèle.
// Il ne peut faire qu'une seule chose à la fois.

// l’event loop est le moteur de JavaScript qui exécute les fonctions JavaScript asynchrones sous forme d’événements ;