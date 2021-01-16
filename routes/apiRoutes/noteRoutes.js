const router = require("express").Router();
const { notes } = require("../../Develop/db/db.json");
const {
  createNote,
  editNote,
  deleteNote,
  findById,
} = require("../../lib/notes");
const uniqid = require("uniqid");

module.exports = router;
