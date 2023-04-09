const express = require ("express")
const router = express.Router()

router.get("/" , (req,res) => {
    res.render("admins-logins-submit")
})

module.exports = router