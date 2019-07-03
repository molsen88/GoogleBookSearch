import React from 'react';
// import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import BookCard from '../components/BookCard/Bookcard'
const BookList = ( props ) => {



    // console.log( this.props );
    return (
        <div className="list">
            {/* <Container> */}
            <h3>Results: </h3>
            {/* <ListGroup>
                    <ListGroupItem > */}
            {
                props.books.map( ( book, i ) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors} />

                } )
            }
            {/* </ListGroupItem> */}
            {/* <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            {/* </ListGroup> */}
            {/* </Container> */}
        </div>

    );
}

export default BookList

