// Création d'une constante par son pour récupérer chaque audio du fichier html. 
// Dans le cas de cet exercice, des id (#song...) ont été créés dans html pour 
// récupérer chaque audio. 

const audio1 = document.querySelector("#song1");
const audio2 = document.querySelector("#song2");
const audio3 = document.querySelector("#song3");
const audio4 = document.querySelector("#song4");
const audio5 = document.querySelector("#song5");
const audio6 = document.querySelector("#song6");
const audio7 = document.querySelector("#song7");
const audio8 = document.querySelector("#song8");
const audio9 = document.querySelector("#song9");


// Au démarrage de l'exercice, ce même processus a été réalisé pour chacune des "key".
// C'est pourquoi j'ai réalisé les deux console.log ci-dessous.


// console.log(key1, key2, key3, key4, key5, key6, key7, key8, key9);
// console.log(audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9);


// Ensuite, nous devons dire à chacune des keys récupérées que l'on souhaite, au moment
// où nous cliquons dessus, qu'elle joue le son qui est reliée à elle.
// Pour cela, nous ajoutons un écouteur d'événement (click étant l'évènement) à chacun
// de nos audios.

// key1.addEventListener('click', () => {
//   audio1.play()
// })

// key2.addEventListener('click', () => {
//   audio2.play()
// })

// key3.addEventListener('click', () => {
//   audio3.play()
// })

// key4.addEventListener('click', () => {
//   audio4.play()
// })

// key5.addEventListener('click', () => {
//   audio5.play()
// })

// key6.addEventListener('click', () => {
//   audio6.play()
// })

// key7.addEventListener('click', () => {
//   audio7.play()
// })

// key8.addEventListener('click', () => {
//   audio8.play()
// })

// key9.addEventListener('click', () => {
//   audio9.play()
// })

// Pour la suite de l'exercice et pour appliquer une animation sur chacune des keys, 
// nous avons tout d'abord récupérer chacun de nos éléments avec des constantes.
// Ensuite, nous avons appliqué un écouteur d'événement (keydown = pour que la key s'enfonce
// lorsque l'on touche la lettre "a" du clavier, par exemple).
// Nous demandons à cet événement que : SI l'événement de la key est strictement égale (===)  
// à A, alors la key1 doit jouer l'audio1. Pour cela, nous créons une "classList.add"
// pour récupérer une classe existante de Css et la faire jouer grâce à Javascript.

const key1 = document.querySelector("#key1");
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        key1.classList.add('playing');
        audio1.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'a') {
        key1.classList.remove('playing');
    }
})

const key2 = document.querySelector("#key2");
document.addEventListener('keydown', (event) => {
    if (event.key === 'z') {
        key2.classList.add('playing');
        audio2.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'z') {
        key2.classList.remove('playing');
    }
})

const key3 = document.querySelector("#key3");
document.addEventListener('keydown', (event) => { // event va récupérer les données de l'événement
    if (event.key === 'e') {
        key3.classList.add('playing');
        audio3.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'e') {
        key3.classList.remove('playing');
    }
})

const key4 = document.querySelector("#key4");
document.addEventListener('keydown', (event) => {
    if (event.key === 'q') {
        key4.classList.add('playing');
        audio4.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'q') {
        key4.classList.remove('playing');
    }
})

const key5 = document.querySelector("#key5");
document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
        key5.classList.add('playing');
        audio5.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 's') {
        key5.classList.remove('playing');
    }
})

const key6 = document.querySelector("#key6");
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        key6.classList.add('playing');
        audio6.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'd') {
        key6.classList.remove('playing');
    }
})

const key7 = document.querySelector("#key7");
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        key7.classList.add('playing');
        audio7.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        key7.classList.remove('playing');
    }
})

const key8 = document.querySelector("#key8");
document.addEventListener('keydown', (event) => {
    if (event.key === 'x') {
        key8.classList.add('playing');
        audio8.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'x') {
        key8.classList.remove('playing');
    }
})

const key9 = document.querySelector("#key9");
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        key9.classList.add('playing');
        audio9.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'c') {
        key9.classList.remove('playing');
    }
})

const key10 = document.querySelector("#key10");
document.addEventListener('keydown', (event) => {
    if (event.key === 'm') {
        key10.classList.add('playing');
        audio9.play()
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'm') {
        key10.classList.remove('playing');
    }
})


function beatBox() {
    simulateKey()
        .then(playBeat())
            console.log(audio1)
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
        .then(playBeat())
}

function simulateKeyPress() {
   setTimeout(() => {
    console.log("retarder 2 secondes")
   }, 2000);
}
simulateKeyPress();
// simuler une touche

function playBeat() {
setTimeout(() => {
    console.log("retarder 2 secondes");
}, 2000);
}
playBeat();


// return new Promise()



