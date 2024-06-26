const users = require('./src/controllers/usersController')
const products = require('./src/controllers/productController')
const express = require("express")
const bodyParser = require('body-parser');
const app = express()

const PORT = 3000

app.use(bodyParser.json());

app.get("/api", (req, res)=>{
    res.send("Api index")
})

app.use("/api/users",users)
app.use("/api/products",products)
products

app.listen(PORT, ()=>{
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
})