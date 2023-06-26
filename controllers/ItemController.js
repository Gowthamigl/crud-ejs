const express = require('express');
const router = express()
const Item = require('../models/item');

// List all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
});

// Create an item (show the form)
router.get('/create', (req, res) => {
  res.render('create');
});

// Create an item (handle the form submission)
router.post('/create', async (req, res) => {
    try{
    //const namee= req.body.name
   // const descriptionn=req.body.description
  const { name, description } = req.body;
 // console.log(namee,descriptionn)
  const item = new Item({ name,description });
  await item.save();
  res.status(200).redirect('/items');
   }catch(err){
    console.log(err)
  }
});

// Edit an item (show the form)
router.get('/edit/:id', async (req, res) => {
    try{
  const item = await Item.findById(req.params.id);
if(item){
    res.status(200).render('edit', { item });
}else{
    res.status(404).send("<h1>USER NOT FOUND</h1>")
}
  
}catch(err){
    res.status(500).json({message:'internal server error'})
    console.log(err)
}
});

// Edit an item (handle the form submission)
router.post('/edit/:id', async (req, res) => {
  try{
    const { name, description } = req.body;
    const createitem=await Item.findByIdAndUpdate(req.params.id, { name, description });
    if(createitem){
    res.status(200).redirect('/items');
    }else{
        res.status(404).send("<h1>USER NOT FOUND</h1>")
    }
  }catch(err){
    res.status(500).json({message:'internal server error'})
    console.log(err)
  }
});

// Delete an item
router.get('/delete/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/items');
});


module.exports = router;