setInterval(function() {
    getPrintState(1);
    getPrintState(2);
}, 1000)

setInterval(function() {
    getPrintJob(1);
    getPrintJob(2);
}, 1000)


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
        document.getElementById(printerid).innerHTML = printJob;
    })
}


