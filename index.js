import express from "express";
import cors from "cors";
import {users} from "./data.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    console.log("WOW its working!!!");
})

app.post('/login',(req,res)=>{
    const {name,password} = req.body;
    console.log(name);
    console.log(password);
    
    const requiredUser = users.find(user => user.name === name && user.password === password);
    if(!requiredUser){
        res.json({
            status:"100",
            msg:"Invalid Login credintials"
        })
    }else{
        res.json({
            status:"400",
            msg:"Login successfull",
            name:name
        })
    }
})

app.listen(3000,()=>{
    console.log('Sever is runnign on port 3000');
})