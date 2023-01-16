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

app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body
 
    let volume = sisi*sisi*sisi
    let keliling = 12 * sisi
    let luaspermukaan = 6*(sisi*sisi)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        keliling: keliling,
        luaspermukaan: luaspermukaan
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
 
    let volume = panjang*lebar*tinggi
    let keliling = 4*(panjang+lebar+tinggi)
    let luaspermukaan = 2*((panjang*lebar)+(lebar*tinggi)+(panjang*tinggi))
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi:tinggi,
        volume: volume,
        keliling: keliling,
        luaspermukaan: luaspermukaan
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
    let jarijari = Number(req.body.jarijari)
  
    let volume = Math.PI * jarijari*jarijari
    let luas = Math.PI * jarijari
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jarijari: jarijari,
        volume: volume,
        luas: luas
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
app.post("/prisma_segitiga", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) 
    let tinggi = Number(req.body.tinggi)// mengamil nilai lebar dari body
 
    let luasAlas = sisi * sisi * sisi
    let kelilingAlas = sisi + sisi + sisi
    let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tinggi)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        tinggi: tinggi,
        luasAlas: luasAlas,
        luasPermukaan: luasPermukaan,
        kelilingAlas: kelilingAlas
    }
 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})