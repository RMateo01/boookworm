const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('support', { title: 'Support' });
});

module.exports = router;