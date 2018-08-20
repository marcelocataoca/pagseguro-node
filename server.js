var express = require('express');
var app = express();
var request = require('request');

app.listen(3000);

app.use(function (req, res, next) {
    debugger;
    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.post('/livro',
    function (req, res, next) {
        request({
            uri: 'https://ws.pagseguro.uol.com.br/v2/checkout',
            method:'POST',
            headers:{
                'Content-type': 'application/x-www-form-urlencoded; charset=ISO-8859-1',                
            },            
            qs: {
              token:'',
            // sandbox
            //   token:'',
              email: '',
              currency: 'BRL',
              itemId1: '1',
              itemQuantity1: '1',
              itemDescription1: 'aaa',
              itemAmount1: '45.90',
            },
        }).pipe(res);
    });