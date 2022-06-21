function getPrinterStatus(printer){
    const printer_dx = "http://10.10.28.228/api/v1/printer/status"
    const printer_jisi = "http://10.10.28.182/api/v1/printer/status"
    const printer_dexter = "http://10.10.28.48/api/v1/printer/status"

    const dx_state_id = document.getElementById("printer-dx-state")
    const dx_indicator_id = document.getElementById("printer-dx-indicator")
    const dx_satus_id = document.getElementById("printer-dx-status")

    const jisi_state_id = document.getElementById("printer-jisi-state")
    const jisi_indicator_id = document.getElementById("printer-jisi-indicator")
    const jisi_status_id = document.getElementById("printer-jisi-status")

    const dexter_state_id = document.getElementById("printer-dexter-state")
    const dexter_indicator_id = document.getElementById("printer-dexter-indicator")
    const dexter_status_id = document.getElementById("printer-dexter-status")

    if (printer == "dx"){
        var url = printer_dx
        var printer_state_id = dx_state_id
        var printer_indicator_id = dx_indicator_id
        var printer_status_id = dx_satus_id
    }
    else if (printer == "jisi"){
        var url = printer_jisi
        var printer_state_id = jisi_state_id
        var printer_indicator_id = jisi_indicator_id
        var printer_status_id = jisi_status_id
    }
    else if (printer == "dexter"){
        var url = printer_dexter
        var printer_state_id = dexter_state_id
        var printer_indicator_id = dexter_indicator_id
        var printer_status_id = dexter_status_id
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
            const printerState = printer_state_id
            printerState.firstChild.nodeValue = "offline"
            printer_indicator_id.classList.remove("text-green-400")
            printer_indicator_id.classList.add("text-red-400")
            console.log("Printer " + printer + " offline")
        })
}

function getPrintjobInfo(printer){
    const printer_dx = "http://10.10.28.228/api/v1/print_job"
    const printer_jisi = "http://10.10.28.182/api/v1/print_job"
    const printer_dexter = "http://10.10.28.48/api/v1/print_job"

    const dx_printjob_id = document.getElementById("printer-dx-printjob")
    const jisi_printjob_id = document.getElementById("printer-jisi-printjob")
    const dexter_printjob_id = document.getElementById("printer-dexter-printjob")

    const dx_time_id = document.getElementById("printer-dx-remainingTime")
    const jisi_time_id = document.getElementById("printer-jisi-remainingTime")
    const dexter_time_id = document.getElementById("printer-dexter-remainingTime")

    if (printer == "dx"){
        var url = printer_dx
        var printjob_id = dx_printjob_id
        var remainingTime_id = dx_time_id
    }
    else if (printer == "jisi"){
        var url = printer_jisi
        var printjob_id = jisi_printjob_id
        var remainingTime_id = jisi_time_id
    }
    else if (printer == "dexter"){
        var url = printer_dexter
        var printjob_id = dexter_printjob_id
        var remainingTime_id = dexter_time_id
    }

    fetch(url)
        .then(response => {
            if (!response.ok){
                console.log("no print job for printer " + printer)
            }
            else {
                response.json()
                .then(data=> {
                    let filename = data.name
                    let timeRemaining = data.time_total - data.time_elapsed

                    printjob_id.firstChild.nodeValue = filename
                    remainingTime_id.firstChild.nodeValue = secondsToHHMMSS(timeRemaining)
                })
            }
        })
        .catch((error) => {
            // console.log("failed to fetch")
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

    getPrinterStatus("dexter")
    getPrintjobInfo("dexter")
}, 1000)