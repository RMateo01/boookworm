const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Book = require("../models/book.model");

router.get("/", (req, res) => {
  Book.find({}, (error, books) => {
    console.log(books);
    return books;
  }).then((books) => {
    res.render("index", { title: "Welcome", books: books });
  });
});

module.exports = router;
