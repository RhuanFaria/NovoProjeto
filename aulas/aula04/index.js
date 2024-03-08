const express = require('express'); //chama o express

const app = express(); //cria uma aplicatação para/com o express

//middleware integrado
app.use(express.json());


app.use(function(req, res, next){
    console.log("Data: ", new Date());
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.body);
    next();
})

//middleware de app
app.use(function (req, res , next) {
    console.log("Data: ", new Date());
    next();
})

//middleware de rota
app.get("/", function(req, res) {
    res.send("Hello MOTO") //status 200
} )

app.post("/", function (req, res) {
    console.log(req.body);
    res.status(201).send('Criado com sucesso meu cria.')
})

app.put("/", function (req, res) {
    res.json({status: "200", message: "sucesso"});
})

app.delete("/", function (req, res) {
    throw new Exception();
})

//middleware de
app.use(function(error, req, res, next){
    res.status(400).send("Foi de Vasco!😂😊😊")
})

app.listen(3000, function(){
    console.log("API está ON!");
}); //ele lê a aplicação na porta 3000 e avisa com a função que está ON

module.exports = app;