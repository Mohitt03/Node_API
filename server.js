import  express  from "express";

const app = express();

//route
app.get("/",(req,res)=>{
    res.send('Hello node API')
})

app.listen("3000", ()=>{
    console.log("Server is running on 3000");
})