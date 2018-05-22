var http = require ("http");

var PORT = 8089;

function handleRequest(request, response) {

    response.end ("It works! Path hit : " + request.url );
}