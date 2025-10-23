import { model } from "mongoose";
import modelDestinasiWisata from "../model/modelDestinasiWisata.js"

export const listDestinasiWisata = async (req, res) => {
    try{
        const data = await modelDestinasiWisata.find({})

        res.status(200).json({
            destinasi_wisata : "List Destinasi Wisata",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            destinasi_wisata : error,
            data : null
        })
    }
}

export const createNewDestinasiWisata = async (req, res) => {
    try{
        const request = req.body

        const response = await modelDestinasiWisata.create({
            destination : request.destination,
            country : request.country,
            reason : request.reason
        })

        res.status(201).json({
            destinasi_wisata : "Data Destinasi Wisata berhasil dibuat",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            destinasi_wisata : error,
            data : null
        })
    }
}

export const updateDestinasiWisata = async (req, res) => {
    try{
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                destinasi_wisata : "Data Destinasi Wisata Wajib di Isi",
                data : null
            })
        }

        const response = await modelDestinasiWisata.findByIdAndUpdate(id, {
            destination : request.destination,
            country : request.country,
            reason : request.reason
        })

        if(!response){
            return res.status(500).json({
                destinasi_wisata : "Data Destinasi Wisata Gagal di Update",
                data : null
            })
        }

        return res.status(200).json({
            destinasi_wisata : "Data Destinasi Wisata Berhasil di Update",
            data : null
        })      

    } catch (error) {
        res.status(500).json({
            destinasi_wisata : error,
            data : null
        })
    }
}

export const deleteDestinasiWisata = async (req, res) => {
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                destinasi_wisata : "Data Destinasi Wisata Wajib di Isi",
                data : null
            })
        }

        const response = await modelDestinasiWisata.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                destinasi_wisata : "Data Destinasi Wisata Berhasil di Hapus",
                data : null
            })
        }

        return res.status(404).json({
            destinasi_wisata : "Data Destinasi Wisata Tidak di Temukan",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            destinasi_wisata : error,
            data : null
        })
    }
}