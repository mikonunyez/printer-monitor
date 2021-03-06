function getPrinterStatus(printer){
    // S5
    const printer_dx = "http://10.10.28.228/api/v1/printer/status"

    // S3
    const printer_jisi = "http://10.10.28.182/api/v1/printer/status"
    const printer_dexter = "http://10.10.28.48/api/v1/printer/status"
    const printer_gee = "http://10.10.28.57/api/v1/printer/status"
    const printer_archie = "http://10.10.141.195/api/v1/printer/status"

    // 3 extended
    const printer_raphael = "http://10.10.28.219/api/v1/printer/status"
    const printer_michaelangelo = "http://10.10.141.196/api/v1/printer/status"
    const printer_donatello = "http://10.10.28.154/api/v1/printer/status"

    const archie_state_id = document.getElementById("printer-archie-state")
    const archie_indicator_id = document.getElementById("printer-archie-indicator")
    const archie_status_id = document.getElementById("printer-archie-status")

    const michaelangelo_state_id = document.getElementById("printer-michaelangelo-state")
    const michaelangelo_indicator_id = document.getElementById("printer-michaelangelo-indicator")
    const michaelangelo_status_id = document.getElementById("printer-michaelangelo-status")

    const donatello_state_id = document.getElementById("printer-donatello-state")
    const donatello_indicator_id = document.getElementById("printer-donatello-indicator")
    const donatello_status_id = document.getElementById("printer-donatello-status")

    const raphael_state_id = document.getElementById("printer-raphael-state")
    const raphael_indicator_id = document.getElementById("printer-raphael-indicator")
    const raphael_status_id = document.getElementById("printer-raphael-status")

    const gee_state_id = document.getElementById("printer-gee-state")
    const gee_indicator_id = document.getElementById("printer-gee-indicator")
    const gee_status_id = document.getElementById("printer-gee-status")

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
    else if (printer == "gee"){
        var url = printer_gee
        var printer_state_id = gee_state_id
        var printer_indicator_id = gee_indicator_id
        var printer_status_id = gee_status_id
    }
    else if(printer == "archie"){
        var url = printer_archie
        var printer_state_id = archie_state_id
        var printer_indicator_id = archie_indicator_id
        var printer_status_id = archie_status_id
    }
    else if (printer == "raphael"){
        var url = printer_raphael
        var printer_state_id = raphael_state_id
        var printer_indicator_id = raphael_indicator_id
        var printer_status_id = raphael_status_id
    }
    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo
        var printer_state_id = michaelangelo_state_id
        var printer_indicator_id = michaelangelo_indicator_id
        var printer_status_id = michaelangelo_status_id
    }
    else if (printer == "donatello"){
        var url = printer_donatello
        var printer_state_id = donatello_state_id
        var printer_indicator_id = donatello_indicator_id
        var printer_status_id = donatello_status_id
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
    const printer_dx = "http://10.10.28.228/api/v1/print_job"
    const printer_jisi = "http://10.10.28.182/api/v1/print_job"
    const printer_dexter = "http://10.10.28.48/api/v1/print_job"
    const printer_gee = "http://10.10.28.57/api/v1/print_job"
    const printer_archie = "http://10.10.141.195/api/v1/print_job"
    const printer_raphael = "http://10.10.28.219/api/v1/print_job"
    const printer_michaelangelo = "http://10.10.141.196/api/v1/print_job"
    const printer_donatello = "http://10.10.28.154/api/v1/print_job"

    const dx_printjob_id = document.getElementById("printer-dx-printjob")
    const jisi_printjob_id = document.getElementById("printer-jisi-printjob")
    const dexter_printjob_id = document.getElementById("printer-dexter-printjob")
    const gee_printjob_id = document.getElementById("printer-gee-printjob")
    const archie_printjob_id = document.getElementById("printer-archie-printjob")
    const raphael_printjob_id = document.getElementById("printer-raphael-printjob")
    const michaelangelo_printjob_id = document.getElementById("printer-michaelangelo-printjob")
    const donatello_printjob_id = document.getElementById("printer-donatello-printjob")

    const dx_time_id = document.getElementById("printer-dx-remainingTime")
    const jisi_time_id = document.getElementById("printer-jisi-remainingTime")
    const dexter_time_id = document.getElementById("printer-dexter-remainingTime")
    const gee_time_id = document.getElementById("printer-gee-remainingTime")
    const archie_time_id = document.getElementById("printer-archie-remainingTime")
    const raphael_time_id = document.getElementById("printer-raphael-remainingTime")
    const michaelangelo_time_id = document.getElementById("printer-michaelangelo-remainingTime")
    const donatello_time_id = document.getElementById("printer-donatello-remainingTime")

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
    else if (printer == "gee"){
        var url = printer_gee
        var printjob_id = gee_printjob_id
        var remainingTime_id = gee_time_id
    }
    else if (printer == "archie"){
        var url = printer_archie
        var printjob_id = archie_printjob_id
        var remainingTime_id = archie_time_id
    }
    else if (printer == "raphael"){
        var url = printer_raphael
        var printjob_id = raphael_printjob_id
        var remainingTime_id = raphael_time_id
    }
    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo
        var printjob_id = michaelangelo_printjob_id
        var remainingTime_id = michaelangelo_time_id
    }
    else if (printer == "donatello"){
        var url = printer_donatello
        var printjob_id = donatello_printjob_id
        var remainingTime_id = donatello_time_id
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
    getPrinterStatus("dx")
    getPrintjobInfo("dx")

    getPrinterStatus("jisi")
    getPrintjobInfo("jisi")

    getPrinterStatus("dexter")
    getPrintjobInfo("dexter")

    getPrinterStatus("gee")
    getPrintjobInfo("gee")

    getPrinterStatus("archie")
    getPrintjobInfo("archie")
    
    getPrinterStatus("raphael")
    getPrintjobInfo("raphael")

    getPrinterStatus("michaelangelo")
    getPrintjobInfo("michaelangelo")

    getPrinterStatus("donatello")
    getPrintjobInfo("donatello")
}, 1000)