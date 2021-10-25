// definisco la variabile che conterrà gli elementi 
// creo il ciclo contenente i box numerati 
// inserisco le condizioni legate ai multipli 

const contenitore = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    const box = document.createElement("div");
    box.className = "box";
    console.log(i);
    console.log(box);
    box.innerHTML = i;
    contenitore.append(box);
}