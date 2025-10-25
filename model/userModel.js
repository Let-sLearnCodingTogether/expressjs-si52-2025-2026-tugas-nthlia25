import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            require : [true, "Username wajib di isi"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            require : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            require : [true, "Password wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)

const UserModel = mongoose.model("User", UserSchema)

export default UserModel