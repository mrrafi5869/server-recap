const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

app.get("/", (req, res) => {
    res.send("now server is running"); 
})

const productsCollection = require("./data/product.json")

app.get("/allProducts", (req, res) => {
    res.send(productsCollection);
})

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = productsCollection.find(p => p.id == id);
    if(!getSingleItem){
        res.send("khuje painai")
    }
    res.send(getSingleItem);
})

app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = productsCollection.filter(p => p.category == name);
    res.send(getCategory);
})

app.listen(Port, () => {
    console.log("server is running on", Port);
})


module.exports = app;