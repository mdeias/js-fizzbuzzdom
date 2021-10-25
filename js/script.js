// definisco la variabile che conterrà gli elementi 
// creo il ciclo contenente i box numerati 
// inserisco le condizioni legate ai multipli 

const contenitore = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = i;
    contenitore.append(box);

// condizioni

    if (!(i % 3)) {
        box.classList.add("per-3");
    }

    if (!(i % 5)) {
        box.classList.add("per-5");
    }

    if (!(i % 5) && !(i % 3)) {
        box.classList.add("comuni");
    }
}

