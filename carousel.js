var cont = 1
var whi = true


function Next() {

    cont++
    whi = true
    if (cont > 5) {
        cont = 1
    }
    var image = document.getElementById("imagen")
    image.src = cont + ".png"

}


function Prev() {

    cont--
    whi = false
    if (cont < 1) {
        cont = 5
    }

    var image = document.getElementById("imagen")
    image.src = cont + ".png"


}

function It() {
    if (whi == true) {
        cont++
        if (cont > 5) {
            cont = 1
        }
    } else {
        cont--

        if (cont < 1) {
            cont = 5
        }
    }

    var image = document.getElementById("imagen")
    image.src = cont + ".png"

}


var int = setInterval(It, 3000)