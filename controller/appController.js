import userModel from "../model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import env from '../config.js';


// validating username
export async function verifyUser(req,res,next){
         try {
           
            const {username} = req.method =="GET" ?  req.query : req.body  

         } catch(error){
            return res.status(500).send({error:"Authentication Error !"})
         }
}




// Register a new user
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if username exists
        const userExist = await userModel.findOne({ username });
        if (userExist) {
            return res.status(400).send({ error: "Please use a unique username" });
        }

        // Check if email exists
        const emailExist = await userModel.findOne({ email });
        if (emailExist) {
            return res.status(400).send({ error: "Please use a unique email" });
        }

        // Hash password and create new user
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new userModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email
            });
            await user.save();
            return res.status(201).send({ msg: "User Registered Successfully" });
        } else {
            return res.status(400).send({ error: "Password is required" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Login a user
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(400).send({ error: "User not found" });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            return res.status(400).send({ error: "Incorrect password" });
        }

        // Create JSON Web Token
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            msg: "Login Successful!",
            username: user.username,
            token
        });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
