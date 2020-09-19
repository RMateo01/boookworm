const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require('../models/book.model');

router.get('/', (req,res) => {
    Book.find({},(error, books) => {
        res.render('index', { title: 'Welcome', books: books});
        
        console.log(books);
    });
});

module.exports = router;