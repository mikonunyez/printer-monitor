fetch('http://10.10.28.228/api/v1/print_job/state', {
    method: 'GET',
    headers: {
        accept: 'application/json',
    }
})
.then(response => response.json())
.then(data => console.log(data));