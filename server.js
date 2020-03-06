const express = require('express');
const mongoose = require('mongoose');
const app = express() ;

// Database
mongoose.connect('mongodb+srv://user:user@user-manager-api-gkkq3.mongodb.net/userManager?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then( () => console.log('Connected to database...') )
    .catch( err => console.error(err) )

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Controllers
const UserController = require('./controllers/UserController')

// Routes
app.post('/api/user/create', UserController.create)
app.post('/api/user/update', UserController.update)
app.get('/api/user/retrieve', UserController.retrieve)
app.delete('/api/user/delete', UserController.delete)


// Start server
app.listen(3000, () => { console.log('Server has started on port 3000...') })