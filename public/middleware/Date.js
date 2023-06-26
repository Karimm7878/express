const date=(req,res,next)=>{

    let date=new Date()
  
    let d=date.getDay()
   
    let h=date.getHours()

    if (!(d>=1 && d<=5 && h>=9 && h<=16 )){
        res.send("hors service !")
       }
    next()
}
module.exports=date