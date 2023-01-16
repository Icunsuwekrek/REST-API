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
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let berat = Number(req.body.berat) 
    let tinggi = Number(req.body.tinggi)// mengamil nilai lebar dari body
    let BMI =  berat / (tinggi*tinggi)
    let status 
    if (BMI <18.5) {
        status="kekurangan berat badan"
    }
    else if (BMI >18.5 && BMI <24.9){
        status="normal"
    }
    else if (BMI >25 && BMI <29.9){
        status="kelebihan berat badan"
    }
    else {
        status ="obesitas"
    }
    
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi : tinggi,
        berat : berat,
        BMI : BMI,
        status : status
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})