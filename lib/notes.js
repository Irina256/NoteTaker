const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./Develop/db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}
function findNoteById() {}
function editNote() {}
function deleteNote() {}

module.exports = { createNewNote, editNote, deleteNote, findNoteById };
