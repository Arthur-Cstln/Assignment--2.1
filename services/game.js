import knex from './database'
const express = require('express');
const app = express(); 
const router = express.Router();

// export const getAllBooks = async () => 
//     await knex('books').select();

// CRUD 

// Creation :

router.post('./database/seed', async (req, res) => {
    try{
        const {item_id, item_name, item_type, item_maxquantity} = req.body;

        await knex('Item').insert({
            item_id,
            item_name,
            item_type,
            item_maxquantity
        });

        const addons = await knex('Item').where({item_id});

        res.status(201).json(addons);
    }catch (error){
        console.error;
        res.status(500).json({error : 'Error, a problem was occuried during the data save'});
    }
});


    // const addItem = async MCItem => { 
    //     await knex('Item').insert({MCItem});
    // }


// Retrival :


router.get('./database/seed', async (req, res) =>{
    try {
        const{item_name} = req.body;
        const result = await knex('Item').select().where(item_name);
        res.status.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({error : "Une erreur s'est produite durant la requête."});
    }
});

// const getItemByName = async item_name => {
//     const results = await knex('Item')
//     .where({item_name}).select();
//     return results[0]
// };


// Updating :

router.put('/mod-elem/:id', async (req, res) =>{
    try{
        const { id } = req.params;
        const modification = req.body;

        await knex('Item')
        .where({ id })
        .update({
            item_maxquantity: 16,
            item_name: 'diamond_sword'
        });

        res.json({success: true});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur s'est produite lors de l'update"});
    }
});



// const ChangeItem = async item_id => {
//     await knex('Item')
//     .update({
//         item_maxquantity: 16,
//         item_name: 'diamond_sword'
//     })
//     .where('item_id');
// }


// Deleting :


router.delete('Supp/:item_id', async (req, res) => {
    try{
        const { item_id } = req.params;

        await knex('Item') 
            .where({item_id})
            .del();

            res.json({ success: true});
    } catch (error) {
        console.error(error);
        res.status(500).json({erreur: "Une erreur s'est produite lors de la suppression."});
    }
});


// const delItem = async id => {
//     await knex('Item')
//         .where({id})
//         .del();
// }

