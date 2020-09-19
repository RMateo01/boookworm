const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('browse', { title: 'Browse' });
});

module.exports = router;