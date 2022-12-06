// 
// GLOBAL VARIABLES FOR PRINTER IP ADDRESSES
// this is a potential security issue
// 
// S5
var printer_dexter_ip = "http://10.10.28.245/" 

// S3
var printer_jisi_ip = "http://10.10.28.64/"
var printer_dx_ip = "http://10.10.28.25/"
var printer_gee_ip = "http://10.10.28.92/"
var printer_archie_ip = "http://10.10.138.35/"

// 3 extended
var printer_raphael_ip = "http://10.10.28.108/"
var printer_michaelangelo_ip = "http://10.10.141.196/"
var printer_donatello_ip = "http://10.10.28.101/"


var requestInterval = 5000 // interval, in miliseconds, to send requests to the printer APIs
document.getElementById("request-interval").firstChild.nodeValue = requestInterval/1000

// 
// GLOBAL VARIABLES FOR PRINTER NAMES
// 
var printers = [
    "dx",
    "jisi",
    "dexter",
    "gee",
    "archie",
    "raphael",
    "michaelangelo",
    "donatello"
]


//
// printer status counters
//
var printersOnline
var printersOffline
var printersInUse
var printersAvailable


function getPrinterStatus(printer){    
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
        var url = printer_dx_ip 
        var printer_state_id = dx_state_id
        var printer_indicator_id = dx_indicator_id
        var printer_status_id = dx_satus_id
    }
    else if (printer == "jisi"){
        var url = printer_jisi_ip
        var printer_state_id = jisi_state_id
        var printer_indicator_id = jisi_indicator_id
        var printer_status_id = jisi_status_id
    }
    else if (printer == "dexter"){
        var url = printer_dexter_ip
        var printer_state_id = dexter_state_id
        var printer_indicator_id = dexter_indicator_id
        var printer_status_id = dexter_status_id
    }
    else if (printer == "gee"){
        var url = printer_gee_ip
        var printer_state_id = gee_state_id
        var printer_indicator_id = gee_indicator_id
        var printer_status_id = gee_status_id
    }
    else if(printer == "archie"){
        var url = printer_archie_ip
        var printer_state_id = archie_state_id
        var printer_indicator_id = archie_indicator_id
        var printer_status_id = archie_status_id
    }
    else if (printer == "raphael"){
        var url = printer_raphael_ip
        var printer_state_id = raphael_state_id
        var printer_indicator_id = raphael_indicator_id
        var printer_status_id = raphael_status_id
    }
    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo_ip
        var printer_state_id = michaelangelo_state_id
        var printer_indicator_id = michaelangelo_indicator_id
        var printer_status_id = michaelangelo_status_id
    }
    else if (printer == "donatello"){
        var url = printer_donatello_ip
        var printer_state_id = donatello_state_id
        var printer_indicator_id = donatello_indicator_id
        var printer_status_id = donatello_status_id
    }

    fetch(url + "api/v1/printer/status")
        .then(response => {
            if (!response.ok){

            }
            else {
                response.json()
                .then(data => {
                    let printerStatus = data

                    printersOnline++
                    
                    // changes the online/offline status of the printer
                    printer_state_id.firstChild.nodeValue = "online"
                    printer_indicator_id.classList.remove("text-red-400")
                    printer_indicator_id.classList.add("text-green-400")
                    
                    // updates the printer printing status
                    printer_status_id.firstChild.nodeValue = printerStatus

                    // updates printerOnline counter
                    document.getElementById("printers-online").firstChild.nodeValue = printersOnline
                })
            }
        })
        .catch((error) => {
            printer_status_id.firstChild.nodeValue = " "
            printer_state_id.firstChild.nodeValue = "offline"
            printer_indicator_id.classList.remove("text-green-400")
            printer_indicator_id.classList.add("text-red-400")
            console.log("Printer " + printer + " offline")

            printersOffline = printers.length - printersOnline
            document.getElementById("printers-offline").firstChild.nodeValue = printersOffline
        })
}

function getPrintjobInfo(printer){
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
        var url = printer_dx_ip
        var printjob_id = dx_printjob_id
        var remainingTime_id = dx_time_id
    }
    else if (printer == "jisi"){
        var url = printer_jisi_ip
        var printjob_id = jisi_printjob_id
        var remainingTime_id = jisi_time_id
    }
    else if (printer == "dexter"){
        var url = printer_dexter_ip
        var printjob_id = dexter_printjob_id
        var remainingTime_id = dexter_time_id
    }
    else if (printer == "gee"){
        var url = printer_gee_ip
        var printjob_id = gee_printjob_id
        var remainingTime_id = gee_time_id
    }
    else if (printer == "archie"){
        var url = printer_archie_ip
        var printjob_id = archie_printjob_id
        var remainingTime_id = archie_time_id
    }
    else if (printer == "raphael"){
        var url = printer_raphael_ip
        var printjob_id = raphael_printjob_id
        var remainingTime_id = raphael_time_id
    }
    else if (printer == "michaelangelo"){
        var url = printer_michaelangelo_ip
        var printjob_id = michaelangelo_printjob_id
        var remainingTime_id = michaelangelo_time_id
    }
    else if (printer == "donatello"){
        var url = printer_donatello_ip
        var printjob_id = donatello_printjob_id
        var remainingTime_id = donatello_time_id
    }

    fetch(url + "api/v1/print_job")
        .then(response => {
            if (!response.ok){
                printjob_id.firstChild.nodeValue = " "
                remainingTime_id.firstChild.nodeValue = " "
                console.log("no print job for printer " + printer)
                
                printersAvailable++
                document.getElementById("printers-available").firstChild.nodeValue = printersAvailable
            }
            else {

                printersInUse++
                document.getElementById("printers-in-use").firstChild.nodeValue = printersInUse

                response.json()
                .then(data=> {
                    let filename = data.name
                    let timeRemaining = data.time_total - data.time_elapsed
                    // console.log(data.result)
                    if(data.result == "Finished"){
                        printjob_id.firstChild.nodeValue = " "
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



function getPrintProgress(printer){
    let printProgress_id

    if (printer == "dx"){
        url = printer_dx_ip
        printProgress_id = document.getElementById("dx-progress")
    }
    else if (printer == "jisi"){
        url = printer_jisi_ip
        printProgress_id = document.getElementById("jisi-progress")
    }
    else if (printer == "dexter"){
        url = printer_dexter_ip
        printProgress_id = document.getElementById("dexter-progress")
    }
    else if (printer == "gee"){
        url = printer_gee_ip
        printProgress_id = document.getElementById("gee-progress")
    }
    else if (printer == "archie"){
        url = printer_archie_ip
        printProgress_id = document.getElementById("archie-progress")
    }
    else if (printer == "raphael"){
        url = printer_raphael_ip
        printProgress_id = document.getElementById("raphael-progress")
    }
    else if (printer == "michaelangelo"){
        url = printer_michaelangelo_ip
        printProgress_id = document.getElementById("michaelangelo-progress")
    }
    else if (printer == "donatello"){
        url = printer_donatello_ip
        printProgress_id = document.getElementById("donatello-progress")
    }

    fetch(url + "api/v1/print_job/progress")
        .then(response => {
            if(!response.ok){}
            else{
                response.json()
                .then(data => {
                    printProgress_id.firstChild.nodeValue = (data*100).toFixed(0)
                    updateProgressBar(printer, data)
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

setInterval(function(){ // sends requests to the printer API every set interval
    foo()   
}, requestInterval)

function foo(){
    printersOnline = 0
    printersOffline = 0
    printersInUse = 0
    printersAvailable = 0
    
    printers.forEach(element => {
        getPrinterStatus(element)
        getPrintjobInfo(element)
        getPrintProgress(element)
    });

    printersAvailable = printersOnline = printersOffline
}

// foo()