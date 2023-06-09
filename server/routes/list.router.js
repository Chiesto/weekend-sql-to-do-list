const express = require('express');
const listRouter = express.Router();

const pool = require('../modules/pool');

//GET router to get the whole table
listRouter.get('/', (req, res)=>{
    let queryText = 'SELECT * FROM "todo";';
    console.log(queryText);
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error =>{
            console.log('Query:', queryText, 'WE HAD AN ERROR =>', error);
            res.sendStatus(500);
        })
});

//POST router to add a new task to the table
listRouter.post('/', (req, res)=>{
    const newTask = req.body;
    console.log('our new task', newTask);
    let queryText = `
        INSERT INTO "todo" ("name", "task", "isComplete")
        VALUES($1, $2, $3);
    `;

    const values = [newTask.name, newTask.task, newTask.isComplete];
    pool.query(queryText, values)
        .then(result =>{
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('we got an error - queryText -', queryText, 'error is -', error);
            res.sendStatus(500)
        })
});

//PUT router to update the isComplete status to true if a task is complete
listRouter.put('/:id', (req,res)=>{
    let idToUpdate = req.params.id;
    console.log(idToUpdate); //making sure the ID was coming through correctly
    let queryText = `UPDATE "todo" SET "isComplete" = true WHERE "id" = $1`;

    pool.query(queryText, [idToUpdate])
        .then(result =>{
            console.log('changed this row =>', result.rows);
            res.sendStatus(200);
        }).catch(error =>{
            console.log('error in our PUT function =>', error);
            res.sendStatus(500);
        })

});

//DELETE router to delete a row
listRouter.delete('/:id', (req,res)=>{
    let idToDelete = req.params.id;
    console.log('checking ID sent over =>', idToDelete);//making sure the ID was coming through correctly
    let queryText = 'DELETE FROM "todo" WHERE "id"=$1';

    pool.query(queryText, [idToDelete])
        .then(result => {
            console.log('task deleted');
            res.sendStatus(200);
        }).catch(error =>{
            console.log('PROBLEMS DELETING AN ITEM', error);
            res.sendStatus(500);
        })
})

module.exports = listRouter;