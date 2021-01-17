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

function findNoteById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function editNote(body, notesArray) {
  const index = notesArray.findIndex((note) => note.id === body.id);

  noteArray.splice(index, 1);
  noteArray.splice(index, 0, body);

  fs.writeFileSync(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
}

function deleteNote(results, notesArray) {
  const index = notesArray.indexOf(results);

  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = { createNewNote, editNote, deleteNote, findNoteById };
