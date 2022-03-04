const { response } = require('express');
const express = require('express');
const Ingredient = require('../models/Ingredient');
const router = express.Router();

router.get('/', async (req, res) => {
    // res.send('In items');
    // console.log('getting ings');
    try{
        const ing = await Ingredient.find();
        res.json(ing);
        // console.log(res);
    }
    catch(err){
        res.json({ message: err });
    }
})

// HARMFUL ING CHECK
router.post('/check', async (req, res) => {
    // res.send('In items');
    // console.log('getting ings');
    // console.log(req.body);
    const userIngredientsJSON = req.body;    
    const userIngredients = userIngredientsJSON["ingredients"];
    
    const harmfulIngredients = [];
    for(const i in userIngredients){
        const parsedIngredient = `^${userIngredients[i]}$`;
        // console.log('hello');
        try{
            // console.log(parsedIngredient);
            const ing = await Ingredient.find({ "ingredient": { $regex: parsedIngredient } });
            // console.log(ing.length);
            if(ing.length == 1){
                harmfulIngredients.push(userIngredients[i]);
                // console.log('Found');
                // res.json({
                //     success: `Found ${userIngredients[i]}`
                // });
                // break;
            }
            // const ing = await Ingredient.find();
            // res.json(ing);
            // console.log(res);
        }
        catch(err){
            res.json({ message: err });
        }
    }
    // console.log(harmfulIngredients);
    res.json({
        harmfulIngredients: harmfulIngredients
    })
    // res.send('recieved')
    // let name = req.params.ingname;
    // name = `^${name}$`;
    // try{
    //     const ing = await Ingredient.find({ "ingredient": { $regex: name } })
    //     res.json(ing);
    //     // console.log(res);
    // }
    // catch(err){
    //     res.json({ message: err });
    // }
})

router.post('/', async (req, res) => {
    // console.log(req.body);
    
    const ing = new Ingredient({
        ingredient: req.body.ingredient
    });

    try{
        await ing.save();
        res.json(ing);
        // console.log(res);
    }
    catch(err){
        res.json({ message: err});
    }
    
})

module.exports = router;