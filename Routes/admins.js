const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

router.get("/" , (req,res) => {
    res.render("admins")
})
/*
router.post("/admins-login-submit" , (req,res) => {
    if(req.body.Name_field === "Ruthrasankar" & req.body.Email_field === "123@gmail.com" & req.body.Password_field === "123"){
        res.send(req.body)
    }else{
        res.send("Incorrect Details")
    }

})
*/


module.exports = router