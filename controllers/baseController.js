const utilities = require("../utilities")
const baseController = {}

baseController.buidlHome = async function (req, res) {
    const nav = await utilities.getNav()
    res.render("index", {title: "HOME", nav})
}

module.exports = baseController