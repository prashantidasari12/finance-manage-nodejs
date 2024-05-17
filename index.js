const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protectedRoute');

const dbURI= 'mongodb://127.0.0.1:27017/finance-app';

mongoose.connect(dbURI);

app.use(express.json());
     
// app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    console.log('I am inside');
    res.send('hello world!');
    // res.sendFile('index.html', {root:__dirname});
});
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.listen(6000,
    function () {
        console.log("App is running on Port 6000");
    });

