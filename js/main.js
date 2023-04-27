//recupero la griglia contenitore
const gioca = document.getElementById("gioca")

gioca.addEventListener("click", creaBox )

function creaBox(creaGriglia){
const griglia = document.getElementById("grid");
griglia.innerHTML= ""
console.log(griglia)

for (let i = 0; i < 100; i++) {
    
    const nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("square", "d-flex","justify-content-center", "align-items-center" );
    nuovoDiv.innerText= i+1

    nuovoDiv.addEventListener("click", function() {
        this.classList.toggle("clicked");
        console.log(i+1)
    });

    griglia.appendChild(nuovoDiv);

}
}