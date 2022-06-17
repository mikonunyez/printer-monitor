setInterval(function() {
    getPrintState(1);
    getPrintState(2);
}, 1000)

setInterval(function() {
    getPrintJob(1);
    getPrintJob(2);
}, 1000)

setInterval(function() {
    getPrintInfoTime(1);
    getPrintInfoTime(2);
}, 1000)


function secondsToHHMMSS(seconds){
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}



function getPrintInfoTime(printer){
    const printer1 = 'http://10.10.28.228/api/v1/print_job';
    const printer2 = 'http://10.10.28.182/api/v1/print_job';
    const printer1ID = "printer1-time";
    const printer2ID = "printer2-time";

    if (printer == 1) {
        var url = printer1;
        var printerid = printer1ID;
    }
    else if (printer == 2) {
        var url = printer2;
        var printerid = printer2ID;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let elapsedTime = data.time_elapsed;
        let totalTime = data.time_total;
        let remainingTime = totalTime - elapsedTime;

        document.getElementById(printerid).innerHTML = "Remaining time: " + secondsToHHMMSS(remainingTime); 
        // console.log("Elapsed time: " + printElapsedTime);
        // console.log("Total time: " + printTotalTime);
        // console.log("Remaining time: " + printRemainingTime);
    })
}



function getPrintState(printer){ //ongoing print status
    const printer1 = 'http://10.10.28.228/api/v1/print_job/state';
    const printer2 = 'http://10.10.28.182/api/v1/print_job/state';
    const printer1ID = "printer1-state";
    const printer2ID = "printer2-state";

    if (printer == 1) {
        var url = printer1;
        var printerid = printer1ID;
    }
    else if (printer == 2) {
        var url = printer2;
        var printerid = printer2ID;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let printState = data;
        document.getElementById(printerid).innerHTML = "Status: " + printState;
    })
    .catch((error) => {
        console.log("Printer " + printer + " is offline");
        document.getElementById(printerid).innerHTML = "Status: Printer OFFLINE!"
    });

}


function getPrintJob(printer){
    const printer1 = 'http://10.10.28.228/api/v1/print_job';
    const printer2 = 'http://10.10.28.182/api/v1/print_job';
    const printer1ID = "printer1-job";
    const printer2ID = "printer2-job";

    if (printer == 1){
        var url = printer1;
        var printerid = printer1ID;
    }
    else if (printer == 2){
        var url = printer2;
        var printerid = printer2ID;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let printJob = data.name;
        document.getElementById(printerid).innerHTML = "Filename: " + printJob;
    })
}


