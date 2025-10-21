import mongoose from "mongoose";

const DestinasiWisataSchema = new mongoose.Schema(
    {
        destination : {
            type : String,
            trim : true,
            required : true
        },

        country : {
            type : String,
            trim : true,
            required : true
        },

        reason : {
            type : String,
            trim : true,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const modelDestinasiWisata = new mongoose.model("destinasi_wisata", DestinasiWisataSchema)
export default modelDestinasiWisata