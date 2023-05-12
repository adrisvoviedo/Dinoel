const papaNoel = document.getElementById("papaNoel");
const arbol = document.getElementById("arbol");
const juego = document.getElementsByClassName("juego");

// function fondo() {
//     for (let i = 800; i > 0; i++) {
//         juego.style.backgroundPositionX = i;
//     }
// }
function salto() {
    if (papaNoel.classList != "salto") {
        papaNoel.classList.add("salto");

        setTimeout(function () {

            papaNoel.classList.remove("salto")
        }, 500)
    }
}

let choca = setInterval(function () {

    let papaTop = parseInt(window.getComputedStyle(papaNoel).getPropertyValue("top"))
    let arbolLeft = parseInt(window.getComputedStyle(arbol).getPropertyValue("left"))
    let arboltop = parseInt(window.getComputedStyle(arbol).getPropertyValue("top"))

    // console.log(papaTop)
    // console.log(arboltop)

    if (arbolLeft < 80 && arbolLeft > 10 && papaTop > 180) {
        alert("Has perdido")
    }

}, 15)

document.addEventListener("keydown", function (event) {
    salto();
})