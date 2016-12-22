const express = require("express");
const router = express.Router();

router.get('/', (req, resp) =>{
	resp.render('login', {title: 'Hello World!', message: 'Good to see you!'})
})

module.exports = router;
