var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

Genre = require('./models/genres.js');
Book = require('./models/books.js');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

/// route for the landing page
app.get('/', function(req, res){
    res.send('Please use /api/books and/or /api/genre');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

//app.get('/api/books/:_id', function(req, res){
//    Book.getBookById(req.params._id, function(err, book){
//        if(err){
//            throw err;
//        }
//        res.json(book);
//    });
//});

app.listen(3000);
console.log('Running on Port 3000');
