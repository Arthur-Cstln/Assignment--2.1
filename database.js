const express = require('express');
const knex = require('knex');

const app = express();

import { development } from './knexfile.js'
import knew from 'knex'

const configuredknex = knex(development);

export default configuredknex;

const db = knex({
    client: 'assi4',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '097274',
        database: 'assi4',
    },
});

app.use(express.json());


// Create :
app.post('/insertdata', async (req, res) => {
    try{
        const { d1, d2 } = req.body;

        const [createId] = await db('Player')
        .insert({ d1, d2});

        const createRec = await db('Player')
        .where('id', createID)
        .first();

        res.json(createRec);
    } catch (error){
        console.error(error);
        res.status(500).json({error: "Something is going wrong !"});
    }
})

// Retrieve :

app.get('/search', async (req, res) => {
    try{
        const { pseudo } = req.query;

        const searchRes = await db('Player')
        .where('pseudo', 'like', '%${pseudo}%');

        res.json(searchRes);
    }catch (error){
        console.error(error);
        res.status(500).json({error: 'Something is going wrong !'});
    }
});

// Updating 

app.put('/updateRec/:pseudo', async (req, res) => {
    try{
        const { pseudo } = req.params;
        const changes = req.body;

        await db('Player')
        .where('pseudo', pseudo)
        .update(changes);

        res.json({ success: true});
    } catch (error){
        console.error(error);
        res.status(500).json({error: 'Something is going wrong !'});
    }
});


// Delete

app.delete('/deleteRec/pseudo', async(req, res) => {
    try {
        const { pseudo } = req.params;

        await db('Pseudo')
        .where('pseudo', pseudo)
        .del();

        res.json({ success: true });
    } catch (error){
        console.error(error);
        res.status(500).json({ error : 'something is going wrong !'});
    }
});




