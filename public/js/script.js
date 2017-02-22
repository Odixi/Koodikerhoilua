$(document).ready(function() {
    console.warn('document is ready.');
    $.get('/employee/getEmployees', function(data, status) {
        console.log(data);
    })
    console.warn('this line is after ajax call.');
})