const express = require( 'express' )
const mongoose = require( 'mongoose' )
const bodyParser = require( 'body-parser' )

const Books = require( './routes/api/books' )

const PORT = process.env.PORT || 3000;
const app = express();
app.use( express.static( "public" ) );

//Bodyparser Middleware
app.use( bodyParser.json() );

// //DB Config
// const db = require( './config/keys' ).mongoURI;

//Connect to Mongo
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
mongoose.connect( "mongodb://localhost/googlebooks", { useNewUrlParser: true } )
    .then( () => console.log( `MongoDB Connected...` ) )
    .catch( err => console.log( err ) )


//Use Routes
app.use( '/api/books', Books )


app.listen( PORT, () => console.log( `Server started on port ${PORT}` ) );