const Note = require('../models/note');

const isOwner = (user, note) => {
    if(JSON.stringify(user._id) == JSON.stringify(note.author._id)){
        return true;
    }else{
        return false;
    }
}

class NotesController{
    async create(req, res){
        const { title, body, done, deadline } = req.body;
        
        try {
            let note = new Note({ title: title, body: body, done: done, deadline: deadline, author: req.user._id });
            await note.save();
            res.status(200).json(note);
        } catch (error) {
            res.status(500).json({ error: 'Problem to create a new note'});
        }
    }

    async findAll(req, res){
        try {
            let notes = await Note.find({ author: req.user._id })
            res.json(notes);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    async search(req, res){
        const { query } = req.query;
        try {
            let notes = await Note.find({
                $and: [
                    { author: req.user._id },
                    { $text: { $search: query } }
                ]
            });
            res.json(notes);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async getById(req, res) {
    
        try {
            const { id } = req.params;
            let note = await Note.findById(id);
            if(isOwner(req.user, note)){
                res.json(note);
            } else{
                res.status(403).json({error: 'Permission denied'});
            }
        } catch (error) {
            res.status(500).json({ error: 'Problem to get a note'});
        }
    }

    async update(req, res){
        const { title, body, done, deadline } = req.body;
        const { id } = req.params;
    
        try {
            let note = await Note.findById(id);
            if(isOwner(req.user, note)){
                let note = await Note.findByIdAndUpdate(id, 
                    { $set: { title: title, body: body, done: done, deadline: deadline } },
                    { upsert: true, 'new': true }
                );
    
                res.json(note);
            } else {
                res.status(403).json({ error: 'Unauthorized' }); 
            }
        } catch (error) {
            res.status(500).json({ error: 'Problem to update a note'})
        }
    }

    async delete(req, res){
        const { id } = req.params;
        try {
            let note = await Note.findById(id);
            if(isOwner(req.user, note)){
                await note.deleteOne();
                res.json({message: 'OK'}).status(204);
            }else{
                res.status(403).json({ error: 'Unauthorized' }); 
            }
        } catch (error) {
            res.status(500).json({ error: 'Problem to delete a note'})
        }
    }
}

module.exports = new NotesController();