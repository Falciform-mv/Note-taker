const router = require('express').Router();
const { createNewNote } = require('../lib/notes')
// const index = require('../public/assets/js/index.js');
const { notes } = require('../db/db.json');


router.get('/api/notes', (req, res) => {
  // res.json(db);
  let results = notes;
  res.json(results);
})


router.post('/api/notes', (req, res) => {
  // console.log(req.body);
  // res.json(req.body);
  const note = createNewNote(req.body, notes);
  note.id = notes.length
  res.json(note);
})


module.exports = router;
