import express from "express";
import * as controllerDestinasiWisata from "../controllers/controllerDestinasiWisata.js"

const api = express.Router()

api.post("/destinasi_wisata", controllerDestinasiWisata.createNewDestinasiWisata)
api.get("/destinasi_wisata", controllerDestinasiWisata.listDestinasiWisata)
api.put("/destinasi_wisata/:id", controllerDestinasiWisata.updateDestinasiWisata)
api.delete("/destinasi_wisata/:id", controllerDestinasiWisata.deleteDestinasiWisata)

export default api