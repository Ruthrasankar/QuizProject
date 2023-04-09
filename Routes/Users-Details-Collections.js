const express = require("express")
const router = express.Router()

router.get("/" , (req,res) => {
    res.render("Users-Details-Collections")
})

module.exports = router