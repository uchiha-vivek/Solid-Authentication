import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
const app = express()
import connect from './database/conn.js'
import router from './router/route.js'
// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8080;

app.get("/", function(req,res){
    res.status(200).json("HOME GET Request")
})


app.use("/api",router)

connect().then(() => {
    try{
        app.listen(port,function(){
            console.log(`Server ruunning on PORT ${port}`)
        })
    }catch(e){
        console.log(e)
    }
}).catch(error=> {
    console.log("Invalid Database connection")
})

 