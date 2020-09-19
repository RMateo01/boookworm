const express = require("express");
const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { collection: "boooks" }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
