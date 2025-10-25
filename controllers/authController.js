// import { compare } from "bcrypt";
import UserModel from "../model/userModel.js"; 
import { compare, hash } from "../utils/hashUtils.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";

export const register = async (req, res) => {
    try {

        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword

        })


        res.status(201).json({
            message : "Berhasil register, silahkan login",
            data : null
        })
    } catch(e) {
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}

export const login = async(req, res) => {
    try{
        const loginData = req.body

        const user = await UserModel.findOne({
            email : loginData.email

        })


        if (!user){
            res.status(404).json({
                message : "User not found",
                data : null
            })
        }

        if(compare(loginData.password, user.password)){
            return res.status(200).json({
                message: "Login berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : jwtSignUtil(user) 
                }
            })
        }
    } catch (error){
    res.status(500).json({
        message: error.message,
        data : null
    })
    }
}