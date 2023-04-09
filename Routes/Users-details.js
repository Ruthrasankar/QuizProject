const express = require("express")
const router = express.Router()
/*const mongoose  = require("mongoose")

//Db url
const url = "mongodb+srv://Ruthrasankar_3:Valli6!@cluster0.vlmakdr.mongodb.net/?retryWrites=true&w=majority"
//connecting to mongo db
mongoose.connect(url , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(console.log("Db is connected from Users-details module"))
.catch(err => console.log(err))

//importing users model
const Users = require("C:/Users/vivek/Desktop/Ruthrasankar-files/Quiz Project/models/Users")
*/

router.get("/",(req,res) => {
    res.render("Users-details")
})

/*
router.get("/Users-Details-Collections", (req,res) => {
    //to save data in db
    const usersData = new Users({
        name : req.body.name,
        mobileNumber : req.body.mobileNumber,
        email : req.body.emailId
    })

    usersData.save().then(() => {
        res.redirect("/Users-details")
    }).catch(err => console.log(err))

})
*/


module.exports = router

