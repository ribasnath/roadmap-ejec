// chamando os outros arquivos
const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

//verbos http
app.get("/clients", function(req, res){
    res.json(data); //resposta
});

app.get("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);
});

//salvar
app.post("/clients", function(req, res) {
    const {name, email} = req.body;

    res.json({name, email});
});

//atualizar
app.put("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const {name} = req.body;

    client.name = name;

    res.json(client);

} );


app.delete("/clients/:id", function(req, res){
    const {id} = req.params;

    //filtrará todos os clients que o id for diferente do id de cima
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});


// inicia o server na porta 3000
app.listen(3000, function() {
    console.log("Server is running");
});
