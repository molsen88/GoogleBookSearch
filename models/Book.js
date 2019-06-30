const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema;

//Create Schema

const BookSchema = new Schema( {
    name: {
        type: String,
    },
    author: {
        type: String
    },
    descrpition: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
} );

module.exports = Book = mongoose.model( 'Book', BookSchema );