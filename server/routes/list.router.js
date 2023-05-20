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

module.exports = listRouter;