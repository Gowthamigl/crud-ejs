const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase4', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("db connect")
}).catch((err)=>{
    console.log(err)
})
const itemController = require('./controllers/ItemController');

// Mount the item routes
app.use('/items', itemController);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});