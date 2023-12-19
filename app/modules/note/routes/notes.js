var express = require('express');
var router = express.Router();
const withAuth = require('../../../middlewares/auth');
const NotesController = require('../controllers/notes.controller');

router.post('/', withAuth, NotesController.create);
router.get('/', withAuth, NotesController.findAll);
router.get('/search', withAuth, NotesController.search);
router.get('/:id', withAuth, NotesController.getById);
router.put('/:id', withAuth, NotesController.update);
router.delete('/:id', withAuth, NotesController.delete);

module.exports = router;