const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('features', { title: 'Features' });
});

module.exports = router;