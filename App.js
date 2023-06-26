const express=require("express")
const date=require("./public/middleware/Date")
const app=express()
app.use(date)




app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
 })
 app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})
app.get("/ourservice",(req,res)=>{
    res.sendFile(__dirname+"/public/OurServices.html")
})
app.get("/contactus",(req,res)=>{
    res.sendFile(__dirname+"/public/Contactus.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})





const port=3000


app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})
