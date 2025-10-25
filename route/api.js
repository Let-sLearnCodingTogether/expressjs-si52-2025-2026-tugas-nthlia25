import express from "express";
import * as controllerDestinasiWisata from "../controllers/controllerDestinasiWisata.js"
import * as profileController from "../controllers/profilController.js"
import * as authController from "../controllers/authController.js"
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router()

api.post('/User', authController.register);
api.post('/User', authController.login);

api.post("/destinasi_wisata", controllerDestinasiWisata.createNewDestinasiWisata)
api.get("/destinasi_wisata", controllerDestinasiWisata.listDestinasiWisata)
api.put("/destinasi_wisata/:id", controllerDestinasiWisata.updateDestinasiWisata)
api.delete("/destinasi_wisata/:id", controllerDestinasiWisata.deleteDestinasiWisata)

api.get('/me', protect,profileController.privateProfile);

export default api;