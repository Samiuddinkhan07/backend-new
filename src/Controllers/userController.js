import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";


export const addUser = {
    path:"/api/addUser",
    method:"post",
    handler:async (req,res) =>{
        const saltRounds = 10
      try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const salt =  await bcrypt.genSalt(saltRounds);

        const hashPassword = await bcrypt.hash(password, salt);

        const existingUser = await User.findOne({email})

        if(existingUser){
            res.status(400).json({message:"User already exists"});
            return
        }
        // const hashPass = crypto.
        const user = new User({
            name,
            email,
            password:hashPassword
        });
       await user.save()
        res.status(201).json({message:"User added successfully"})
      } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
      }
    }
}