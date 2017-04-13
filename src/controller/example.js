import mongoose from 'mongoose';
import { Router } from 'express';
import Example from '../model/example';
import bodyParser from 'body-parser';

export default({ config, db }) => {
    let api = Router();

    // CRUD - Create Read Update Delete

    // '/v1/example/add'
    api.post('/add', (req, res) => {
        let newExample = new Example();
        newExample.name = req.body.name;

        newExample.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Example saved successfully' });
        });
    });

    // '/v1/example' - Read
    api.get('/', (req, res) => {
        Example.find({}, (err, examples) => {
            if(err) {
                res.send(err);
            }
            res.json(examples);
        });
    });

    // 'v1/example/:id' - Read 1
    api.get('/:id', (req, res) => {
        Example.findById(req.params.id, (err, example) => {
            if(err) {
                res.send(err);
            }
            res.json(example);
        });
    });


    // 'v1/example/:id' - Update
    api.put('/:id', (req, res) => {
        Example.findById(req.params.id, (err, example) => {
            if(err) {
                res.send(err);
            }
            example.name = req.body.name;
            example.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: "Example info updated"});
            });
        });
    });

    // 'v1/example/:id' - Delete
    api.delete('/:id', (req, res) => {
        Example.remove({
            _id: req.params.id
        }, (err, example) => {
            if(err) {
                res.send(err);
            }
            res.json( { message: "Example Successfully Removed!"});
        });
    });

    return api;
}