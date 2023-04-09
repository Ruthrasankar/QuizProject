const express = require("express")
//including body parser
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
const mongoose  = require("mongoose")
var multer = require("multer")
var upload = multer()

//accessing css
app.use(express.static(path.join(__dirname , "public")))

//for www
app.use(bodyParser.urlencoded({extended : true}))
//for application/json format
app.use(bodyParser.json())

//setting layouts
const expresslayouts = require("express-ejs-layouts")

//importing modules
const indexRouter = require("./Routes/index")
const adminRouter = require("./Routes/admins")
const quizRouter = require("./Routes/quiz")
const Users_detailsRouter = require("./Routes/Users-details") 
const Rules_Router = require("./Routes/Rules")
const Users_Details_CollectionsRouter = require("./Routes/Users-Details-Collections")
const ejs = require("ejs")

//using modules
app.use("/" , indexRouter)
app.use("/admins" , adminRouter)
app.use("/quiz" , quizRouter)
app.use("/Users-details",Users_detailsRouter)
app.use("/Rules" , Rules_Router)
app.use("/Users-Details-Collections" , Users_Details_CollectionsRouter)

//using layouts
app.use(expresslayouts)
app.set("layout" , "layouts/layout")

//view engine setup
app.set("view engine" , "ejs")

//mongo db - storing data

//Db url
const url = "mongodb+srv://Ruthrasankar_3:Valli6!@cluster0.pprvtnt.mongodb.net/Users"
//connecting to mongo db
mongoose.connect(url , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(console.log("Db is connected from app module"))
.catch(err => console.log(err))

const db = mongoose.connection

db.on("error",error => console.error(error))
db.once("open" , () => console.log("Connected well"))

//schema
const userSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true,
        name : String

    },
    mobile : {
        type : Number,
        required : true,
        mobile : Number
    },
    email : {
        type : String,
        required : true,
        email : String
      
    }
})

const UsersDetails = mongoose.model("UsersDetails" , userSchema)

//importing users model
//const Users = require("./models/Users")

/*app.get("/Users-details/Users-Details-Collections", (req,res) => {
    //to save data in db
    var usersData = new UsersDetails({
        name : req.body.name,
        mobileNumber : req.body.mobileNumber,
        email : req.body.emailId

    })

    //usersData.insert().then  
    usersData.insertOne().save().then(() => {
        res.redirect("/quiz")
        console.log("data saved")
    }).catch(err => console.log(err))

})*/

app.post("/Users-details/Users-Details-Collections" , (req,res) => {
    
    var usersData = new UsersDetails ({
        name : req.body.name,
        mobile : req.body.mobile,
        email : req.body.email

    })

    usersData.save().then(
        res.redirect("/Rules")
    ).catch(err => res.send("Error occured" + err ))

    /*async function uploadData(){
        try {
            const a = await usersData.save().then(
                res.redirect("/quiz")
            )
        }catch(err){
            console.log(err)
        }
    }*/
    
})

app.get("/admins-login-submit" , (req,res) => {
    UsersDetails.find().then(data => {
        res.render("admins-login-submit",{data : data})
    }).catch(err => console.log(err))
})

app.get("/admins-login-submit",(req,res) => {

})

//listening port
app.listen(process.env.PORT || 3000,() => {
    console.log("connected to port 3000")
})
