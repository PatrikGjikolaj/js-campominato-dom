//recupero la griglia contenitore
const gioca = document.getElementById("gioca")
const numCasuali = [];

gioca.addEventListener("click", creaBox )

function creaBox(creaGriglia){
const griglia = document.getElementById("grid");
griglia.innerHTML= ""
console.log(griglia)
let contatore = 0;
for (let i = 0; i < 100; i++) {
    
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("square", "d-flex","justify-content-center", "align-items-center" );
    nuovoDiv.innerText= i+1


    nuovoDiv.addEventListener("click", function() {
        this.classList.add("clicked");
        console.log(i+1)
        contatore++;

        for (let c = 0; c < 16; c++) {
            if (nuovoDiv.innerText == numCasuali[c]) {
                this.classList.remove("clicked");
                this.classList.add("bomb");
                document.getElementById("tentativi").innerHTML = "Hai eseguito " + contatore + " tentativi";
            }
            
        }
        
    });
    griglia.appendChild(nuovoDiv);
}
for (i=0 ; i < 16; i++) {
    var rand = Math.floor(Math.random()*100 + 1);
    if (!numCasuali.includes(rand)) {
        numCasuali [i] = rand;
    }else {
        i--;
    }

    console.log(rand);
}
}


