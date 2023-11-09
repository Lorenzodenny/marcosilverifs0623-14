const numeriArray = []

for (let i = 0; i < 77; i++){
    numeriArray.push(i)
}

 // 76 numeri presi come array

// funzione per andare ad appendere i numeri nel div contenitore

function inserisciNumeri(){
    const ulNelDiv = document.getElementById("unorderList")
    for( let i = 0; i < numeriArray.length; i++){
        const numeriTombola = document.createElement("li")
        numeriTombola.classList.add("numeriTabella")
        numeriTombola.textContent = numeriArray[i]
        ulNelDiv.appendChild(numeriTombola)

    }

}


function numeroRandom(){
    let numeroCasuale = Math.floor(Math.random() * 76) 
    const numeroSelezionato = document.getElementsByTagName("li")
    numeroSelezionato.style.backgroundColor = "black"
    numeroSelezionato.style.color = "white"
    numeroSelezionato.style.fontWeight = "bold"
}

















inserisciNumeri(numeriArray)