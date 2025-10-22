import express from "express";
import database from "../config/database.js"

const app = express()
app.use(express.json())

app.use('/api', api)

app.listen(3000, () => {
    database(18)
    console.log(`Aplikasi berjalan di http://localhost:3000`)
})