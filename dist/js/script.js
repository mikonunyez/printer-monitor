function getPrinterStatus(printer){
    const printer_dx = "http://10.10.28.228/api/v1/printer/status"
    const printer_jisi = "http://10.10.28.182/api/v1/printer/status"

    if (printer == "dx"){
        var url = printer_dx;
    }
    else if (printer == "jisi"){
        var url = printer_jisi;
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
                    document.getElementById("printer-dx-state").firstChild.nodeValue = "online"
                    document.getElementById("printer-dx-indicator").classList.remove("text-red-400")
                    document.getElementById("printer-dx-indicator").classList.add("text-green-400")
                    
                    // updates the printer printing status
                    document.getElementById("printer-dx-status").firstChild.nodeValue = data
                })
            }
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
                console.log("dx has no print job")
            }
            else {
                response.json()
                .then(data=> {
                    let filename = data.name
                    let timeRemaining = data.time_total - data.time_elapsed

                    document.getElementById("printer-dx-printjob").firstChild.nodeValue = filename
                    document.getElementById("printer-dx-remainingTime").firstChild.nodeValue = secondsToHHMMSS(timeRemaining)
                })
            }
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

getPrinterStatus("dx")
// getPrintjobInfo("dx")