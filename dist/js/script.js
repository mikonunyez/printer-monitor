function getPrinterStatus(printer){
    const printer_dx = "http://10.10.28.228/api/v1/printer/status"
    const printer_jisi = "http://10.10.28.182/api/v1/printer/status"

    const dx_state_id = document.getElementById("printer-dx-state")
    const dx_indicator_id = document.getElementById("printer-dx-indicator")
    const dx_satus_id = document.getElementById("printer-dx-status")

    const jisi_state_id = document.getElementById("printer-jisi-state")
    const jisi_indicator_id = document.getElementById("printer-jisi-indicator")
    const jisi_status_id = document.getElementById("printer-jisi-status")

    if (printer == "dx"){
        var url = printer_dx;
        var printer_state_id = dx_state_id
        var printer_indicator_id = dx_indicator_id
        var printer_status_id = dx_satus_id
    }
    else if (printer == "jisi"){
        var url = printer_jisi;
        var printer_state_id = jisi_state_id
        var printer_indicator_id = jisi_indicator_id
        var printer_status_id = jisi_status_id
    }

    fetch(url)
        .then(response => {
            if (!response.ok){
                const printerState = document.getElementById("printer-dx-state")

                printerState.firstChild.nodeValue = "offline"
                console.log("Printer offline")
            }
            else{
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
            console.log("Failed to fetch")
        })
}

function getPrintjobInfo(printer){
    const printer_dx = "http://10.10.28.228/api/v1/print_job"
    const printer_jisi = "http://10.10.28.182/api/v1/print_job"

    if (printer == "dx"){
        var url = printer_dx;
    }
    else if (printer == "jisi"){
        var url = printer_jisi;
    }

    fetch(url)
        .then(function(response){
            if (!response.ok){
                console.log("no print job")
            }
            else {
                response.json()
                .then(data=> {
                    let filename = data.name
                    let timeRemaining = data.time_total - data.time_elapsed

                    document.getElementById("printer-dx-printjob").firstChild.nodeValue = filename
                    document.getElementById("printer-dx-remainingTime").firstChild.nodeValue = secondsToHHMMSS(timeRemaining)
                    console.log(secondsToHHMMSS(timeRemaining))
                })
            }
        })
        .catch((error) => {
            console.log("failed to fetch")
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
    getPrinterStatus("dx")
    getPrintjobInfo("dx")

    getPrinterStatus("jisi")
    getPrintjobInfo("jisi")
}, 1000)