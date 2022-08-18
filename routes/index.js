var express = require("express");
var router = express.Router();
const db = require("../config/mysql");

router.get('/', function(req,res,next) {
  res.render('index', { title : 'Express' });
});

router.post("/", async (req, res, next) => {
  try {
    await db.query(`
      INSERT INTO USERS(username, password)
      VALUES("${req.body.username}", "${req.body.password}")
  `);
    console.log(req.body)

    return res.status(200).json({ message : "success" });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
