const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
 
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
 
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
// -------------------NOMOR 3----------------------------
app.post("/decimal", (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let biner = bilangan.toString(2)
    let octal = bilangan.toString(8)
    let hexadecimal = bilangan.toString(16)

    let response = {
        decimal: bilangan,
        result: {
            biner: biner,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})

app.post("/biner", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)

    let response = {
        biner: bilangan,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})

app.post("/octal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 8)
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)

    let response = {
        octal: bilangan,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }

    res.json(response)
})

app.post("/hexadecimal", (req, res) => {
    let bilangan = req.body.bilangan
    let decimal = parseInt(bilangan, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)

    let response = {
        hexadecimal: bilangan,
        result: {
            decimal: decimal,
            biner: biner,
            octal: octal
        }
    }

    res.json(response)
})