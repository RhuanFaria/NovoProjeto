const express = require('express');
const routerProdutos = require('./router');

const app = express();

app.use(routerProdutos);

app.listen(5000, function(){
    console.log("API está ON!");
})

module.exports = app;