const express = require( './node_modules/express' );
const router = express.Router();

//Book Model
const Book = require( '../../models/Book' );

//@route GET api/books
//@desc get ALL books
//@access Public

router.get( '/api/books', ( req, res ) => {
    Book.find()
        .then( books => res.json( books ) )
} )


//POST api/book
//Create an book
//Public
router.post( '/saved', ( req, res ) => {
    const newBook = new Book( {
        title: req.body.title,
        author: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    } );
    newBook.save().then( book => res.json( book ) );
} )

//DELETE api/items/:id
router.delete( '/:id', ( req, res ) => {
    Book.findById( req.params.id )
        .then( book => book.remove().then( () => res.json( { success: true } ) ) )
        .catch( err => res.status( 404 ).json( { success: false } ) )
} );


module.exports = router;
