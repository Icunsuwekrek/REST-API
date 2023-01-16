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
// endpoint "/test" dengan method GET
app.get("/convert/:celcius/:nilai", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = req.params.celcius //mengambil nilai dari parameter celcius
    let nilai = Number (req.params.nilai) //mengambil nilai dari parameter celcius
 
    let fahrenheit = (nilai * 9/5)+32
    let reamur = 4/5*nilai
    let kelvin = nilai + 273.15
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: celcius,
        nilai: nilai,
        result:{
        fahrenheit: fahrenheit,
        reamur: reamur,
        kelvin: kelvin
        }
      
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
// app.get("/convert/:reamur/:nilai", (req,res) => {
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let reamur = req.params.reamur //mengambil nilai dari parameter reamur
//     let nilai = Number (req.params.nilai) //mengambil nilai dari parameter celcius
 
//     let celcius = nilai * 5/4
//     let fahrenheit = (nilai * 9/4) + 32 
//     let kelvin = (nilai * 5/4) + 273.15
 
//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         reamur: nilai,
//         result:{
//         celcius:celcius,
//         fahrenheit:fahrenheit,
//         kelvin: kelvin
//         }
      
//     }
 
//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })
// app.get("/convert/:kelvin/:nilai", (req,res) => {
//     // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
//     let kelvin = req.params.kelvin //mengambil nilai dari parameter reamur
//     let nilai = Number (req.params.nilai) //mengambil nilai dari parameter celcius
 
//     let celcius = nilai - 273.15
//     let fahrenheit = (nilai-273.15)*9/5 + 32
//     let reamur = 4/5*(nilai-273)
 
//     // membuat objek yang berisi data yang akan dijadikan response
//     let response = {
//         kelvin: nilai,
//         result:{
//         celcius:celcius,
//         fahrenheit:fahrenheit,
//         reamur:reamur
//         }
      
//     }
 
//     // memberikan response dengan format JSON yang berisi objek di atas
//     res.json(response)
// })
app.get("/convert/:fahrenheit/:nilai", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenheit = req.params.fahrenheit //mengambil nilai dari parameter reamur
    let nilai = Number (req.params.nilai) //mengambil nilai dari parameter celcius
 
    let celcius = 5/9*(nilai-32)
    let reamur = (nilai-32)*4/9
    let kelvin = (nilai-32)*5/9+273.15
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit: nilai,
        result:{
        celcius:celcius,
        reamur:reamur,
        kelvin:kelvin
        }
      
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

