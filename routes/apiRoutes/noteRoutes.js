const router = require("express").Router();
const { notes } = require("../../Develop/db/db.json");
const {
  createNewNote,
  editNote,
  deleteNote,
  findNoteById,
} = require("../../lib/notes");
const uniqid = require("uniqid");

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.get("/notes/:id", (req, res) => {
  const result = findNoteById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post("/notes", (req, res) => {
  if (!req.body.id) {
    req.body.id = uniqid();
    createNewNote(req.body, notes);
  } else {
    editNote(req.body, notes);
  }
  res.json(req.body);
});

router.delete("/notes/:id", (req, res) => {
  const result = findNoteById(req.params.id, notes);

  deleteNote(result, notes);
  res.json();
});

module.exports = router;
