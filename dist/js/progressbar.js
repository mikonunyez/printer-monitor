function updateProgressBar(printer, progress){
    let elem;

    if (printer == "dx"){
        elem = document.getElementById("dx-progressbar")
    }
    else if (printer == "jisi"){
        elem = document.getElementById("jisi-progressbar")
    }
    else if (printer == "dexter"){
        elem = document.getElementById("dexter-progressbar")
    }
    else if (printer == "gee"){
        elem = document.getElementById("gee-progressbar")
    }
    else if (printer == "archie"){
        elem = document.getElementById("archie-progressbar")
    }
    else if (printer == "raphael"){
        elem = document.getElementById("raphael-progressbar")
    }
    else if (printer == "michaelangelo"){
        elem = document.getElementById("michaelangelo-progressbar")
    }
    else if (printer == "donatello"){
        elem = document.getElementById("donatello-progressbar")
    }

    elem.style.width = ((progress*100)+"%")
}