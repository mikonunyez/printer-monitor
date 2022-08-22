function getPrinterUptime(printer){
    const printer_michaelangelo = "http://10.10.141.196/api/v1/system/uptime"
    const printer_archie ="http://10.10.141.195/api/v1/system/uptime"

    if(printer == "michaelangelo"){
        var url = printer_michaelangelo
        var id = document.getElementById("printer-michaelangelo-uptime")
    }
    else if(printer == "archie"){
        var url = printer_archie
        var id = document.getElementById("printer-archie-uptime")
    }

    fetch(url)
        .then(response => {
            if (!response.ok){
            }
            else{
                response.json()
                .then(data => {
                    let printerUptime = secondsToHHMMSS(data)
                    console.log("printer uptime is: " + printerUptime)
                    id.firstChild.nodeValue = printerUptime
                })
            }
        })
}

function getPrinterStatus(printer){
    const printer_archie = "http://10.10.141.195/api/v1/printer/status"
    const printer_michaelangelo = "http://10.10.141.196/api/v1/printer/status"


    const archie_state_id = document.getElementById("printer-archie-state")
    const archie_indicator_id = document.getElementById("printer-archie-indicator")
    const archie_status_id = document.getElementById("printer-archie-status")

    const michaelangelo_state_id = document.getElementById("printer-michaelangelo-state")
    const michaelangelo_indicator_id = document.getElementById("printer-michaelangelo-indicator")
    const michaelangelo_status_id = document.getElementById("printer-michaelangelo-status")


    if(printer == "archie"){
        var url = printer_archie
        var printer_state_id = archie_state_id
        var printer_indicator_id = archie_indicator_id
        var printer_status_id = archie_status_id
    }

    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo
        var printer_state_id = michaelangelo_state_id
        var printer_indicator_id = michaelangelo_indicator_id
        var printer_status_id = michaelangelo_status_id
    }


    fetch(url)
        .then(response => {
            if (!response.ok){
            }
            else {
                response.json()
                .then(data => {
                    let printerStatus = data                    
                    // changes the online/offline status of the printer
                    printer_state_id.firstChild.nodeValue = "online"
                    printer_indicator_id.classList.remove("text-red-400")
                    printer_indicator_id.classList.add("text-green-400")
                    
                    // updates the printer printing status
                    printer_status_id.firstChild.nodeValue = printerStatus
                })
            }
        })
        .catch((error) => {
            printer_status_id.firstChild.nodeValue = " "
            printer_state_id.firstChild.nodeValue = "offline"
            printer_indicator_id.classList.remove("text-green-400")
            printer_indicator_id.classList.add("text-red-400")
            console.log("Printer " + printer + " offline")
        })
}

function getPrintjobInfo(printer){
    const printer_archie = "http://10.10.141.195/api/v1/print_job"
    const printer_michaelangelo = "http://10.10.141.196/api/v1/print_job"

    const archie_printjob_id = document.getElementById("printer-archie-printjob")
    const michaelangelo_printjob_id = document.getElementById("printer-michaelangelo-printjob")

    const archie_time_id = document.getElementById("printer-archie-remainingTime")
    const michaelangelo_time_id = document.getElementById("printer-michaelangelo-remainingTime")

    
    if (printer == "archie"){
        var url = printer_archie
        var printjob_id = archie_printjob_id
        var remainingTime_id = archie_time_id
    }
    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo
        var printjob_id = michaelangelo_printjob_id
        var remainingTime_id = michaelangelo_time_id
    }

    fetch(url)
        .then(response => {
            if (!response.ok){
                printjob_id.firstChild.nodeValue = " "
                remainingTime_id.firstChild.nodeValue = " "
                console.log("no print job for printer " + printer)
            }
            else {
                response.json()
                .then(data=> {

                    let filename = data.name
                    let timeRemaining = data.time_total - data.time_elapsed
                    // console.log(data.result)
                    if(data.result == "Finished"){
                        printjob_id.firstChild.nodeValue = data.result
                        remainingTime_id.firstChild.nodeValue = "00:00:00"
                    }
                    else{
                        remainingTime_id.firstChild.nodeValue = secondsToHHMMSS(timeRemaining)

                    }

                    printjob_id.firstChild.nodeValue = filename

                })
            }
        })
        .catch((error) => {
            printjob_id.firstChild.nodeValue = " "
            remainingTime_id.firstChild.nodeValue = " "
        })
}


// utility function. takes time in seconds and returns an HHMMSS format
function secondsToHHMMSS(seconds){ 
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

setInterval(function(){
    getPrinterStatus("archie")
    getPrintjobInfo("archie")
    
    getPrinterStatus("michaelangelo")
    getPrintjobInfo("michaelangelo")

    getPrinterUptime("michaelangelo")
}, 1000)